import {
  AfterContentInit,
  afterNextRender,
  Component,
  contentChildren,
  ElementRef,
  Signal,
  viewChild
} from '@angular/core';
import {
  CAROUSEL,
  CAROUSEL_CARD,
  CarouselApiInterface,
  CarouselCardInterface
} from '@components/carousel/types';

@Component({
  selector: 'emr-carousel',
  exportAs: 'emr-carousel',
  standalone: true,
  imports: [],
  providers: [
    {
      provide: CAROUSEL,
      useExisting: CarouselComponent
    }
  ],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  private _content = viewChild<ElementRef>('content');
  private _cards = contentChildren<CarouselCardInterface>(CAROUSEL_CARD);

  private _index = 0;

  get api(): CarouselApiInterface {
    return {
      isNextDisabled: () => this._isNextDisabled,
      isPreviousDisabled: () => this._isPreviousDisabled,
      previous: () => this._previous(),
      next: () => this._next()
    }
  }

  private _previous(): void {
    const contentElement = this._content()?.nativeElement as HTMLElement;

    for (let index = this._cards().length - 1;  index >= 0; index--) {
      if (index >= this._index) {
        continue;
      }

      const card = this._cards().at(index) as CarouselCardInterface;

      if (!this._visibleInParentViewport(contentElement, card.element)) {
        this._scrollToCard(card);
        break;
      }
    }
  }

  private _next(): void {
    const contentElement = this._content()?.nativeElement as HTMLElement;
    const notVisibleCard = this._cards().find(
      (card: CarouselCardInterface, index: number) => !this._visibleInParentViewport(contentElement, card.element) && index > this._index
    );

    if (notVisibleCard) {
      this._scrollToCard(notVisibleCard);
    }
  }

  private _scrollToCard(notVisibleCard: CarouselCardInterface): void {
    this._index = this._cards().findIndex(card => card === notVisibleCard);
    notVisibleCard.element.scrollIntoView({
      block: 'nearest',
      behavior: 'smooth',
      inline: 'center'
    });
  }

  private _visibleInParentViewport = (parent: HTMLElement, el: HTMLElement) => {
    const parentRect = parent.getBoundingClientRect();
    const elementRect = el.getBoundingClientRect();

    return (
      elementRect.top >= parentRect.top &&
      elementRect.right <= parentRect.left &&
      elementRect.bottom <= parentRect.bottom &&
      elementRect.left <= parentRect.left
    );
  }

  private get _isPreviousDisabled(): boolean {
    return this._index === 0;
  }

  private get _isNextDisabled(): boolean {
    return this._index === this._cards().length - 1;
  }
}
