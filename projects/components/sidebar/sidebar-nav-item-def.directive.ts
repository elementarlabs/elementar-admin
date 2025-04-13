import { Directive, inject, input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[emrSidebarNavItemDef]'
})
export class SidebarNavItemDefDirective {
  readonly templateRef = inject(TemplateRef);

  readonly emrSidebarNavItemDef = input<any>();
}
