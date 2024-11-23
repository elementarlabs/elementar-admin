import { Directive, inject, TemplateRef } from '@angular/core';

@Directive({
    selector: '[emrNumberInputPrefix]',
    exportAs: 'emrNumberInputPrefix',
    standalone: false
})
export class NumberInputPrefixDirective {
  readonly templateRef = inject(TemplateRef);
}
