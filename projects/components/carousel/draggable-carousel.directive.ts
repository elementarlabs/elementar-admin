import { Directive, ElementRef, HostListener, Renderer2, OnInit, Input, OnDestroy, NgZone } from '@angular/core';

// Функция плавности (замедление к концу)
function easeOutQuad(t: number): number {
  return t * (2 - t);
}

// Функция сопротивления для "резиновой ленты" (логарифмическая)
function calculateResistance(overpull: number, factor: number = 0.5): number {
  // Уменьшаем влияние больших значений overpull
  return Math.sign(overpull) * Math.log1p(Math.abs(overpull)) * factor * 20; // Множитель для масштаба
}

@Directive({
  selector: '[emrDraggableCarousel]',
  standalone: true,
})
export class DraggableCarouselDirective implements OnInit, OnDestroy {

  @Input() cardSelector: string = '.emr-carousel-card';
  @Input() snapToCenter: boolean = true;
  @Input() snapDebounceTime: number = 50;
  @Input() snapDuration: number = 300; // Длительность анимации снаппинга/возврата

  // Фактор сопротивления для эффекта "резиновой ленты" при выходе за границы
  @Input() resistanceFactor: number = 0.5;

  private isDragging = false;
  private startX = 0;
  private scrollLeftStart = 0;
  private currentTranslateX = 0; // Текущее значение translateX для "резинки"
  private hostElement: HTMLElement;
  private snapTimeoutId: ReturnType<typeof setTimeout> | null = null;
  private scrollAnimationId: number | null = null; // ID для requestAnimationFrame скролла
  private transformAnimationId: number | null = null; // ID для requestAnimationFrame трансформации

  constructor(
    private el: ElementRef<HTMLElement>,
    private renderer: Renderer2,
    private zone: NgZone
  ) {
    this.hostElement = this.el.nativeElement;
  }

  ngOnInit(): void {
    this.renderer.setStyle(this.hostElement, 'cursor', 'grab');
    this.hostElement.style.scrollBehavior = 'auto'; // Управляем через JS
    // Убедимся, что у хост-элемента нет transition для transform, чтобы не конфликтовать
    // this.renderer.setStyle(this.hostElement, 'transition', 'none');
  }

  ngOnDestroy(): void {
    this.clearSnapTimeout();
    this.cancelScrollAnimation();
    this.cancelTransformAnimation();
  }

  // --- Обработчики событий мыши ---

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent): void {
    // Отменяем ВСЕ текущие анимации
    this.clearSnapTimeout();
    this.cancelScrollAnimation();
    this.cancelTransformAnimation();
    // Сбрасываем transform немедленно, если пользователь кликнул во время анимации возврата
    if (this.currentTranslateX !== 0) {
      this.currentTranslateX = 0;
      this.renderer.setStyle(this.hostElement, 'transform', '');
    }
    this.hostElement.style.scrollBehavior = 'auto';

    if (event.button !== 0) return;

    this.isDragging = true;
    this.startX = event.pageX - this.hostElement.offsetLeft;
    this.scrollLeftStart = this.hostElement.scrollLeft;

    this.renderer.setStyle(this.hostElement, 'cursor', 'grabbing');
    this.renderer.addClass(this.hostElement, 'dragging-active');
    event.preventDefault();
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    if (!this.isDragging) return;
    event.preventDefault();

    const currentX = event.pageX - this.hostElement.offsetLeft;
    const walk = currentX - this.startX;
    const intendedScrollLeft = this.scrollLeftStart - walk;
    const maxScrollLeft = this.hostElement.scrollWidth - this.hostElement.clientWidth;

    let targetScrollLeft = intendedScrollLeft;
    let translateX = 0;

    // Проверяем выход за левую границу
    if (intendedScrollLeft < 0) {
      targetScrollLeft = 0;
      const overpull = -intendedScrollLeft;
      //translateX = calculateResistance(overpull, this.resistanceFactor); // Простая версия
      translateX = Math.min(overpull * this.resistanceFactor, this.hostElement.clientWidth * 0.4); // Ограничим максимальное растяжение

    }
    // Проверяем выход за правую границу
    else if (intendedScrollLeft > maxScrollLeft) {
      targetScrollLeft = maxScrollLeft;
      const overpull = intendedScrollLeft - maxScrollLeft;
      // translateX = -calculateResistance(overpull, this.resistanceFactor); // Простая версия
      translateX = -Math.min(overpull * this.resistanceFactor, this.hostElement.clientWidth * 0.4); // Ограничим максимальное растяжение

    }

    // Применяем scrollLeft (он будет зажат в границах 0..maxScrollLeft)
    if (this.hostElement.scrollLeft !== targetScrollLeft) {
      this.hostElement.scrollLeft = targetScrollLeft;
    }

    // Применяем или сбрасываем трансформацию для "резиновой ленты"
    if (this.currentTranslateX !== translateX) {
      this.currentTranslateX = translateX;
      if (Math.abs(translateX) > 0.1) { // Применяем только если есть значимое смещение
        this.renderer.setStyle(this.hostElement, 'transform', `translateX(${translateX}px)`);
      } else {
        // Сбрасываем, если вернулись в границы или смещение очень мало
        this.currentTranslateX = 0; // Убедимся, что сбросили
        this.renderer.setStyle(this.hostElement, 'transform', '');
      }
    }
  }

  @HostListener('document:mouseup', ['$event'])
  @HostListener('document:mouseleave', ['$event'])
  onMouseUpOrLeave(event: MouseEvent): void {
    if (!this.isDragging) return;
    this.stopDragging();
  }

  @HostListener('mouseleave', ['$event'])
  onMouseLeaveElement(event: MouseEvent): void {
    if (!this.isDragging) {
      this.renderer.setStyle(this.hostElement, 'cursor', 'grab');
    }
  }

  // --- Логика завершения перетаскивания ---

  private stopDragging(): void {
    if (!this.isDragging) return;

    this.isDragging = false;
    this.renderer.setStyle(this.hostElement, 'cursor', 'grab');
    this.renderer.removeClass(this.hostElement, 'dragging-active');

    // Отменяем предыдущий таймаут, если был
    this.clearSnapTimeout();

    // Проверяем, нужно ли анимировать возврат из "резинки"
    if (Math.abs(this.currentTranslateX) > 0.1) {
      // Небольшая задержка перед анимацией возврата, чтобы избежать конфликтов
      this.snapTimeoutId = setTimeout(() => {
        this.animateTransformReset();
        this.snapTimeoutId = null;
      }, this.snapDebounceTime / 2); // Можно использовать половину debounce
    }
    // Иначе, если включен снаппинг к центру, запускаем его
    else if (this.snapToCenter) {
      this.snapTimeoutId = setTimeout(() => {
        this.animateSnapToNearestCard();
        this.snapTimeoutId = null;
      }, this.snapDebounceTime);
    }
    // Если ничего анимировать не нужно, убедимся, что transform сброшен
    else if (this.currentTranslateX !== 0) {
      this.currentTranslateX = 0;
      this.renderer.setStyle(this.hostElement, 'transform', '');
    }
  }

  // --- Анимации ---

  /**
   * Анимирует transform: translateX обратно к 0.
   */
  private animateTransformReset(): void {
    this.cancelTransformAnimation(); // Отменяем предыдущую, если есть

    const startTranslateX = this.currentTranslateX;
    const distance = 0 - startTranslateX;

    if (Math.abs(distance) < 1) {
      if (this.currentTranslateX !== 0) {
        this.currentTranslateX = 0;
        this.renderer.setStyle(this.hostElement, 'transform', '');
      }
      return;
    }

    const duration = this.snapDuration; // Используем ту же длительность
    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(1, elapsed / duration);
      const easedProgress = easeOutQuad(progress);

      const newTranslateX = startTranslateX + distance * easedProgress;
      this.currentTranslateX = newTranslateX; // Обновляем состояние
      this.renderer.setStyle(this.hostElement, 'transform', `translateX(${newTranslateX}px)`);

      if (progress < 1) {
        this.transformAnimationId = requestAnimationFrame(step);
      } else {
        this.currentTranslateX = 0; // Точно сбрасываем в конце
        this.renderer.setStyle(this.hostElement, 'transform', '');
        this.transformAnimationId = null;
      }
    };

    this.zone.runOutsideAngular(() => {
      this.transformAnimationId = requestAnimationFrame(step);
    });
  }

  /**
   * Находит ближайшую карточку и запускает плавную анимацию скролла к ней.
   */
  private animateSnapToNearestCard(): void {
    // Эта функция остается почти такой же, как в предыдущем варианте с JS-анимацией
    const container = this.hostElement;
    const cards = Array.from(container.querySelectorAll<Element>(this.cardSelector));
    if (!cards.length) return;

    const containerScrollLeft = container.scrollLeft;
    const containerWidth = container.clientWidth;
    const containerCenter = containerScrollLeft + containerWidth / 2;
    let nearestCard: HTMLElement | null = null;
    let minDistance = Infinity;

    cards.forEach(cardElement => {
      if (cardElement instanceof HTMLElement) {
        const card = cardElement;
        const cardLeft = card.offsetLeft;
        const cardWidth = card.offsetWidth;
        const cardCenter = cardLeft + cardWidth / 2;
        const distance = Math.abs(cardCenter - containerCenter);
        if (distance < minDistance) {
          minDistance = distance;
          nearestCard = card;
        }
      }
    });

    if (nearestCard) {
      const confirmedNearestCard = nearestCard as HTMLElement;
      const targetCardLeft = confirmedNearestCard.offsetLeft;
      const targetCardWidth = confirmedNearestCard.offsetWidth;
      let targetScrollLeft = targetCardLeft + targetCardWidth / 2 - containerWidth / 2;
      const maxScrollLeft = container.scrollWidth - containerWidth;
      targetScrollLeft = Math.max(0, Math.min(targetScrollLeft, maxScrollLeft));

      this.animateScroll(targetScrollLeft); // Вызываем анимацию скролла
    }
  }

  /**
   * Выполняет плавную анимацию прокрутки до targetScrollLeft.
   */
  private animateScroll(targetScrollLeft: number): void {
    this.cancelScrollAnimation(); // Отменяем предыдущую

    const container = this.hostElement;
    const startScrollLeft = container.scrollLeft;
    const distance = targetScrollLeft - startScrollLeft;

    if (Math.abs(distance) < 1) return;

    const duration = this.snapDuration;
    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(1, elapsed / duration);
      const easedProgress = easeOutQuad(progress);

      container.scrollLeft = startScrollLeft + distance * easedProgress;

      if (progress < 1) {
        this.scrollAnimationId = requestAnimationFrame(step);
      } else {
        container.scrollLeft = targetScrollLeft;
        this.scrollAnimationId = null;
      }
    };

    this.zone.runOutsideAngular(() => {
      this.scrollAnimationId = requestAnimationFrame(step);
    });
  }

  // --- Функции отмены и очистки ---

  private cancelScrollAnimation(): void {
    if (this.scrollAnimationId !== null) {
      cancelAnimationFrame(this.scrollAnimationId);
      this.scrollAnimationId = null;
    }
  }

  private cancelTransformAnimation(): void {
    if (this.transformAnimationId !== null) {
      cancelAnimationFrame(this.transformAnimationId);
      this.transformAnimationId = null;
      // Важно также сбросить currentTranslateX, если анимация прервана
      // Но сброс transform лучше делать в onMouseDown или при завершении
    }
  }

  private clearSnapTimeout(): void {
    if (this.snapTimeoutId !== null) {
      clearTimeout(this.snapTimeoutId);
      this.snapTimeoutId = null;
    }
  }
}
