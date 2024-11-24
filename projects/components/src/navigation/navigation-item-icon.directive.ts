import { Directive, inject, TemplateRef } from '@angular/core';

@Directive({
    selector: '[emrNavigationItemIcon]',
    exportAs: 'emrNavigationItemIcon',
    host: {
        'class': 'emr-navigation-item-icon'
    }
})
export class NavigationItemIconDirective {
  public readonly templateRef = inject(TemplateRef, { optional: true });
}
