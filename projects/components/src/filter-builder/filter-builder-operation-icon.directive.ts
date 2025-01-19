import { Directive, inject, TemplateRef } from '@angular/core';

@Directive({
  selector: '[emrFilterBuilderOperationIcon]'
})
export class FilterBuilderOperationIconDirective {
  readonly templateRef = inject(TemplateRef);
}
