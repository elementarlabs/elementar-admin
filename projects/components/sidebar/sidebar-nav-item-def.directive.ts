import { Directive, inject, input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[emrSidebarNavItemDef]'
})
export class SidebarNavItemDefDirective {
  readonly templateRef = inject(TemplateRef);

  readonly emrSidebarNavItemDefIs = input<(navItem: any) => boolean>();
}
