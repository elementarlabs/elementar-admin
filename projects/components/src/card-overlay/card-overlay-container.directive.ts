import { Directive } from '@angular/core';

@Directive({
  selector: '[emrCardOverlayContainer]',
  exportAs: 'emrCardOverlayContainer',
  standalone: true,
  host: {
    'class': 'relative group cursor-pointer overflow-hidden'
  }
})
export class CardOverlayContainerDirective {
}
