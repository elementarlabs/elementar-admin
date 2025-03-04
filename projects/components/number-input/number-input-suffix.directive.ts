import { Directive, inject, TemplateRef } from '@angular/core';

@Directive({
  selector: '[emrNumberInputSuffix]',
  exportAs: 'emrNumberInputSuffix'
})
export class NumberInputSuffixDirective {
  readonly templateRef = inject(TemplateRef);
}
