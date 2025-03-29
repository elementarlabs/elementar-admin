import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[emrImageResizerImage]',
  exportAs: 'emrImageResizerImage',
  host: {
    '(dragstart)': '_onDragStart($event)'
  }
})
export class ImageResizerImageDirective {
  readonly elementRef = inject<ElementRef<HTMLImageElement>>(ElementRef);

  protected _onDragStart(event: Event) {
    event.stopPropagation();
    event.preventDefault();
  }
}
