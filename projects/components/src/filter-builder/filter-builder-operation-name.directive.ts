import { Directive, inject, TemplateRef } from '@angular/core';

@Directive({ selector: '[emrFilterBuilderOperationName]' })
export class FilterBuilderOperationNameDirective {
  readonly templateRef = inject(TemplateRef);
}
