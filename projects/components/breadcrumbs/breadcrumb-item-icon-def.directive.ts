import { Directive, inject, TemplateRef } from '@angular/core';

@Directive({
  selector: '[emrBreadcrumbItemIconDef]',
  standalone: true
})
export class BreadcrumbItemIconDefDirective {
  readonly templateRef = inject(TemplateRef);
}
