import { Directive, HostListener, inject, input, OnInit } from '@angular/core';
import { CAROUSEL, CarouselInterface } from './types';


@Directive({
  selector: '[emrCarouselNext]',
  standalone: true,
  host: {
    '[attr.disabled]': '_carousel?.api.isNextDisabled()  ? true : null'
  }
})
export class CarouselNextDirective implements OnInit {
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
    this._carousel?.api.next();
  }
}
