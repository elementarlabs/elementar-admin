import { Directive, inject, TemplateRef } from '@angular/core';

@Directive({
    selector: '[emrDecreaseControl]',
    exportAs: 'emrDecreaseControl',
    standalone: false
})
export class DecreaseControlDirective {
  readonly templateRef = inject(TemplateRef);
}
