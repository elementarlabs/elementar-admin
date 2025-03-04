import { Directive } from '@angular/core';

@Directive({
  selector: '[emrCarouselControls]',
  standalone: true,
  host: {
    'class': 'emr-carousel-controls',
  }
})
export class CarouselControlsDirective {

}
