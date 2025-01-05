import { Directive, HostListener, inject, input, OnInit } from '@angular/core';
import { CAROUSEL, CarouselInterface } from './types';

@Directive({
  selector: '[emrCarouselPrevious]',
  exportAs: 'emrCarouselPrevious',
  standalone: true,
  host: {
    'class': 'emr-carousel-previous',
    '[attr.disabled]': '_carousel?.api.isPreviousDisabled() ? true : null'
  }
})
export class CarouselPreviousDirective implements OnInit {
  protected _carousel = inject<CarouselInterface>(CAROUSEL, {
    optional: true
  });

  carousel = input<CarouselInterface | null>(null);

  ngOnInit(): void {
    if (this.carousel() && !this._carousel) {
      this._carousel = this.carousel();
    }
  }

  @HostListener('click')
  private _handleClick(): void {
    this._carousel?.api.previous();
  }
}
