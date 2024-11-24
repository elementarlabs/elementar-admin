import { Directive, inject, TemplateRef } from '@angular/core';

@Directive({
    selector: '[emrDecreaseControl]',
    exportAs: 'emrDecreaseControl'
})
export class DecreaseControlDirective {
  readonly templateRef = inject(TemplateRef);
}
