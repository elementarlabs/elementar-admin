import { Directive, inject, TemplateRef } from '@angular/core';

@Directive({
    selector: '[emrNumberInputSuffix]',
    exportAs: 'emrNumberInputSuffix',
    standalone: false
})
export class NumberInputSuffixDirective {
  readonly templateRef = inject(TemplateRef);
}
