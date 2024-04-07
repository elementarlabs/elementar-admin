import { Directive, inject, TemplateRef } from '@angular/core';

@Directive({
  selector: '[emrFilterBuilderRemove]'
})
export class FilterBuilderRemoveDirective {
  readonly templateRef = inject(TemplateRef);
}
