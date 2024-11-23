import { Directive, inject, TemplateRef } from '@angular/core';

@Directive({
    selector: '[emrIncreaseControl]',
    exportAs: 'emrIncreaseControl',
    standalone: false
})
export class IncreaseControlDirective {
  readonly templateRef = inject(TemplateRef);
}
