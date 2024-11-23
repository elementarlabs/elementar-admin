import { Directive, inject, TemplateRef } from '@angular/core';

@Directive({
    selector: '[emrFilterBuilderOperationName]',
    standalone: false
})
export class FilterBuilderOperationNameDirective {
  readonly templateRef = inject(TemplateRef);
}
