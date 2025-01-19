import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[emrPopoverOrigin]',
  exportAs: 'emrPopoverOrigin'
})
export class PopoverOriginDirective {
  private _elementRef = inject(ElementRef);

  get api() {
    return {
      nativeElement: () => {
        return this._elementRef?.nativeElement;
      }
    }
  }
}
