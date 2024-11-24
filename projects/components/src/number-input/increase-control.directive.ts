import { Directive, inject, TemplateRef } from '@angular/core';

@Directive({
    selector: '[emrIncreaseControl]',
    exportAs: 'emrIncreaseControl'
})
export class IncreaseControlDirective {
  readonly templateRef = inject(TemplateRef);
}
