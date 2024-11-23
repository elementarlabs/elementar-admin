import { Directive, inject, TemplateRef } from '@angular/core';

@Directive({
    selector: '[emrFilterBuilderOperationIcon]',
    standalone: false
})
export class FilterBuilderOperationIconDirective {
  readonly templateRef = inject(TemplateRef);
}
