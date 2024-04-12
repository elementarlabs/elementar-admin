import { Directive, inject, TemplateRef } from '@angular/core';

@Directive({
  selector: '[emrFilterBuilderAdd]'
})
export class FilterBuilderAddDirective {
  readonly templateRef = inject(TemplateRef);
}
