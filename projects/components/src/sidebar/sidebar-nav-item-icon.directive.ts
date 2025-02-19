import { Directive, inject, TemplateRef } from '@angular/core';

@Directive({
  selector: '[emrSidebarNavItemIcon]'
})
export class SidebarNavItemIconDirective {
  readonly templateRef = inject(TemplateRef);
}
