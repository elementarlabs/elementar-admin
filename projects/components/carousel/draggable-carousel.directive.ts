import {
  Directive, ElementRef, HostListener, Renderer2, OnInit, Input, Output, EventEmitter, OnDestroy, NgZone, AfterViewInit
} from '@angular/core';

// Функция плавности
function easeOutQuad(t: number): number {
  return t * (2 - t);
}

@Directive({
  selector: '[emrDraggableCarousel]',
  standalone: true,
})
export class DraggableCarouselDirective implements OnInit, AfterViewInit, OnDestroy {

  @Input() cardSelector: string = '.emr-carousel-card';
  @Input() snapToCenter: boolean = true;
  @Input() snapDebounceTime: number = 50;
  @Input() snapDuration: number = 300;
  @Input() resistanceFactor: number = 0.5;
  @Input() velocityThreshold: number = 0.5;

  /**
   * Вызывается при изменении активного (центрированного) индекса карточки
   * после завершения анимации.
   */
  @Output() activeIndexChange = new EventEmitter<number>();

  private isDragging = false;
  private startX = 0;
  private scrollLeftStart = 0;
  private currentTranslateX = 0;
  private hostElement: HTMLElement;

  // Для отслеживания скорости
  private lastMoveX: number | null = null;
  private lastMoveTime: number | null = null;
  private currentVelocityX: number = 0; // pixels/ms

  private snapTimeoutId: ReturnType<typeof setTimeout> | null = null;
  private scrollAnimationId: number | null = null;
  private transformAnimationId: number | null = null;

  private lastEmittedIndex: number | null = null; // Отслеживание последнего эмита

  constructor(
    private el: ElementRef<HTMLElement>,
    private renderer: Renderer2,
    private zone: NgZone
  ) {
    this.hostElement = this.el.nativeElement;
  }

  ngOnInit(): void {
    this.renderer.setStyle(this.hostElement, 'cursor', 'grab');
    this.hostElement.style.scrollBehavior = 'auto';
  }

  ngAfterViewInit(): void {
    // Эмитим начальное состояние после рендеринга
    // Используем setTimeout 0 для гарантии, что все размеры рассчитаны
    setTimeout(() => {
      const initialIndex = this.findCurrentCenterIndex();
      this.emitActiveIndex(initialIndex);
    }, 0);
  }

  ngOnDestroy(): void {
    this.clearSnapTimeout();
    this.cancelScrollAnimation();
    this.cancelTransformAnimation();
  }

  // --- Обработчики событий мыши ---
  // (onMouseDown, onMouseMove, onMouseUpOrLeave, onMouseLeaveElement остаются без изменений)
  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent): void {
    this.clearSnapTimeout();
    this.cancelScrollAnimation();
    this.cancelTransformAnimation();
    if (this.currentTranslateX !== 0) {
      this.currentTranslateX = 0;
      this.renderer.setStyle(this.hostElement, 'transform', '');
    }
    this.hostElement.style.scrollBehavior = 'auto';

    if (event.button !== 0) return;

    this.isDragging = true;
    this.startX = event.pageX - this.hostElement.offsetLeft;
    this.scrollLeftStart = this.hostElement.scrollLeft;

    this.lastMoveX = event.pageX;
    this.lastMoveTime = event.timeStamp;
    this.currentVelocityX = 0;

    this.renderer.setStyle(this.hostElement, 'cursor', 'grabbing');
    this.renderer.addClass(this.hostElement, 'dragging-active');
    event.preventDefault();
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    if (!this.isDragging) return;
    event.preventDefault();

    const currentX = event.pageX;
    const currentTime = event.timeStamp;

    if (this.lastMoveTime !== null && this.lastMoveX !== null && currentTime > this.lastMoveTime) {
      const deltaX = currentX - this.lastMoveX;
      const deltaTime = currentTime - this.lastMoveTime;
      if (deltaTime > 0) {
        this.currentVelocityX = -deltaX / deltaTime;
      }
    }
    this.lastMoveX = currentX;
    this.lastMoveTime = currentTime;

    const dragDeltaX = currentX - (this.startX + this.hostElement.offsetLeft);
    const intendedScrollLeft = this.scrollLeftStart - dragDeltaX;
    const maxScrollLeft = this.hostElement.scrollWidth - this.hostElement.clientWidth;
    let targetScrollLeft = intendedScrollLeft;
    let translateX = 0;

    if (intendedScrollLeft < 0) {
      targetScrollLeft = 0;
      const overpull = -intendedScrollLeft;
      translateX = Math.min(overpull * this.resistanceFactor, this.hostElement.clientWidth * 0.4);
    } else if (intendedScrollLeft > maxScrollLeft) {
      targetScrollLeft = maxScrollLeft;
      const overpull = intendedScrollLeft - maxScrollLeft;
      translateX = -Math.min(overpull * this.resistanceFactor, this.hostElement.clientWidth * 0.4);
    }

    if (this.hostElement.scrollLeft !== targetScrollLeft) {
      this.hostElement.scrollLeft = targetScrollLeft;
    }
    if (this.currentTranslateX !== translateX) {
      this.currentTranslateX = translateX;
      if (Math.abs(translateX) > 0.1) {
        this.renderer.setStyle(this.hostElement, 'transform', `translateX(${translateX}px)`);
      } else {
        this.currentTranslateX = 0;
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
  // (stopDragging остается без изменений)
  private stopDragging(): void {
    if (!this.isDragging) return;

    this.isDragging = false;
    this.renderer.setStyle(this.hostElement, 'cursor', 'grab');
    this.renderer.removeClass(this.hostElement, 'dragging-active');
    this.clearSnapTimeout();

    const wasPulled = Math.abs(this.currentTranslateX) > 0.1;

    if (wasPulled) {
      this.snapTimeoutId = setTimeout(() => {
        this.animateTransformReset(); // Эта анимация теперь будет эммитить индекс
        this.snapTimeoutId = null;
      }, this.snapDebounceTime / 2);
    } else if (this.snapToCenter) {
      this.snapTimeoutId = setTimeout(() => {
        this.initiateSnap(); // Эта функция запускает animateToCard -> animateScroll, которая эммитит индекс
        this.snapTimeoutId = null;
      }, this.snapDebounceTime);
    }
  }

  // --- Логика снаппинга ---
  // (initiateSnap, findNearestCardIndex, animateToCard остаются без изменений)
  private initiateSnap(): void {
    const cards = Array.from(this.hostElement.querySelectorAll<HTMLElement>(this.cardSelector));
    if (!cards.length) return;

    let targetCardIndex = -1;
    const currentScroll = this.hostElement.scrollLeft;
    const containerCenter = currentScroll + this.hostElement.clientWidth / 2;

    let currentNearestCardIndex = this.findNearestCardIndex(cards, containerCenter);
    if (currentNearestCardIndex < 0) {
      console.warn("[emrDraggableCarousel] Could not find nearest card index.");
      return;
    }

    const absVelocity = Math.abs(this.currentVelocityX);

    if (absVelocity > this.velocityThreshold) {
      if (this.currentVelocityX < 0) {
        targetCardIndex = currentNearestCardIndex - 1;
      } else {
        targetCardIndex = currentNearestCardIndex + 1;
      }
      targetCardIndex = Math.max(0, Math.min(targetCardIndex, cards.length - 1));
    } else {
      targetCardIndex = currentNearestCardIndex;
    }

    if (targetCardIndex >= 0 && targetCardIndex < cards.length) {
      this.animateToCard(cards[targetCardIndex]);
    }
  }

  private findNearestCardIndex(cards: HTMLElement[], position: number): number {
    let nearestIndex = -1;
    let minDistance = Infinity;
    cards.forEach((card, index) => {
      if (card instanceof HTMLElement) {
        const cardLeft = card.offsetLeft;
        const cardWidth = card.offsetWidth;
        const cardCenter = cardLeft + cardWidth / 2;
        const distance = Math.abs(cardCenter - position);
        if (distance < minDistance) {
          minDistance = distance;
          nearestIndex = index;
        }
      }
    });
    return nearestIndex;
  }

  private animateToCard(targetCard: HTMLElement | null): void {
    if (!targetCard) return;
    const container = this.hostElement;
    const containerWidth = container.clientWidth;
    const targetCardLeft = targetCard.offsetLeft;
    const targetCardWidth = targetCard.offsetWidth;
    let targetScrollLeft = targetCardLeft + targetCardWidth / 2 - containerWidth / 2;
    const maxScrollLeft = container.scrollWidth - containerWidth;
    targetScrollLeft = Math.max(0, Math.min(targetScrollLeft, maxScrollLeft));
    this.animateScroll(targetScrollLeft); // Вызываем анимацию скролла
  }


  // --- Анимации (с добавлением эмита индекса) ---

  /**
   * Анимирует transform: translateX обратно к 0 и эммитит индекс крайней карточки.
   */
  private animateTransformReset(): void {
    this.cancelTransformAnimation();
    const startTranslateX = this.currentTranslateX;
    const distance = 0 - startTranslateX;
    if (Math.abs(distance) < 1) {
      if (this.currentTranslateX !== 0) {
        this.currentTranslateX = 0;
        this.renderer.setStyle(this.hostElement, 'transform', '');
        // Эмит индекса, если трансформация была сброшена без анимации
        const finalIndex = this.findCurrentCenterIndex();
        this.emitActiveIndex(finalIndex);
      }
      return;
    }
    const duration = this.snapDuration;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(1, elapsed / duration);
      const easedProgress = easeOutQuad(progress);
      const newTranslateX = startTranslateX + distance * easedProgress;
      this.currentTranslateX = newTranslateX;
      this.renderer.setStyle(this.hostElement, 'transform', `translateX(${newTranslateX}px)`);

      if (progress < 1) {
        this.transformAnimationId = requestAnimationFrame(step);
      } else {
        // --- АНИМАЦИЯ ЗАВЕРШЕНА ---
        this.currentTranslateX = 0;
        this.renderer.setStyle(this.hostElement, 'transform', '');
        this.transformAnimationId = null;
        // Определяем и эммитим индекс крайней карточки
        const finalIndex = this.findCurrentCenterIndex(); // Найдет 0 или последний индекс
        this.emitActiveIndex(finalIndex);
        // --- КОНЕЦ ЭМИТА ---
      }
    };
    this.zone.runOutsideAngular(() => {
      this.transformAnimationId = requestAnimationFrame(step);
    });
  }

  /**
   * Выполняет плавную анимацию прокрутки до targetScrollLeft и эммитит индекс центрированной карточки.
   */
  private animateScroll(targetScrollLeft: number): void {
    this.cancelScrollAnimation();
    const container = this.hostElement;
    const startScrollLeft = container.scrollLeft;
    const distance = targetScrollLeft - startScrollLeft;
    if (Math.abs(distance) < 1) {
      // Если не двигались, все равно проверим и эммитим текущий индекс
      const finalIndex = this.findCurrentCenterIndex();
      this.emitActiveIndex(finalIndex);
      return;
    }

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
        // --- АНИМАЦИЯ ЗАВЕРШЕНА ---
        container.scrollLeft = targetScrollLeft; // Точно устанавливаем конечное значение
        this.scrollAnimationId = null;
        // Определяем и эммитим индекс финально центрированной карточки
        const finalIndex = this.findCurrentCenterIndex();
        this.emitActiveIndex(finalIndex);
        // --- КОНЕЦ ЭМИТА ---
      }
    };
    this.zone.runOutsideAngular(() => {
      this.scrollAnimationId = requestAnimationFrame(step);
    });
  }

  // --- Вспомогательные функции ---

  /** Находит индекс карточки, ближайшей к текущему центру контейнера */
  private findCurrentCenterIndex(): number {
    const cards = Array.from(this.hostElement.querySelectorAll<HTMLElement>(this.cardSelector));
    if (!cards.length) return -1; // Если карточек нет

    const currentScroll = this.hostElement.scrollLeft;
    const containerCenter = currentScroll + this.hostElement.clientWidth / 2;
    return this.findNearestCardIndex(cards, containerCenter);
  }

  /** Эмиттит активный индекс, если он изменился */
  private emitActiveIndex(index: number): void {
    // Эмитим только если индекс валидный и отличается от предыдущего
    if (index >= 0 && index !== this.lastEmittedIndex) {
      this.lastEmittedIndex = index;
      // Запускаем эмит внутри зоны Angular для корректной реакции подписчиков
      this.zone.run(() => {
        this.activeIndexChange.emit(index);
        console.log('Emitted activeIndexChange:', index); // Для дебага
      });
    }
  }

  // --- Функции отмены и очистки ---
  // (cancelScrollAnimation, cancelTransformAnimation, clearSnapTimeout остаются без изменений)
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
    }
  }

  private clearSnapTimeout(): void {
    if (this.snapTimeoutId !== null) {
      clearTimeout(this.snapTimeoutId);
      this.snapTimeoutId = null;
    }
  }
}
