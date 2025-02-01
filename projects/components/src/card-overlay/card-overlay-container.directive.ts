import { Directive } from '@angular/core';

@Directive({
  selector: '[emrCardOverlayContainer]',
  exportAs: 'emrCardOverlayContainer',
  standalone: true,
  host: {
    'class': 'relative group cursor-pointer overflow-hidden emr-card-overlay-container'
  }
})
export class CardOverlayContainerDirective {

}
