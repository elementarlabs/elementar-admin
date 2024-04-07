import { Directive, inject, TemplateRef } from '@angular/core';

@Directive({
  selector: '[emrNumberInputPrefix]',
  exportAs: 'emrNumberInputPrefix'
})
export class NumberInputPrefixDirective {
  readonly templateRef = inject(TemplateRef);
}
