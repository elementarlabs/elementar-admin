import { Component, ElementRef, inject } from '@angular/core';
import { CAROUSEL_CARD } from '../types';

@Component({
  selector: 'emr-carousel-card,[emr-carousel-card]',
  exportAs: 'emrCarouselCard',
  standalone: true,
  imports: [],
  providers: [
    {
      provide: CAROUSEL_CARD,
      useExisting: CarouselCardComponent
    }
  ],
  templateUrl: './carousel-card.component.html',
  styleUrl: './carousel-card.component.scss'
})
export class CarouselCardComponent {
  private _elementRef = inject(ElementRef);

  get element(): HTMLElement {
    return this._elementRef.nativeElement;
  }
}
