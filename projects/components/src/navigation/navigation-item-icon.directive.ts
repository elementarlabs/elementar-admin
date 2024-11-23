import { Directive, inject, TemplateRef } from '@angular/core';

@Directive({
    selector: '[emrNavigationItemIcon]',
    exportAs: 'emrNavigationItemIcon',
    host: {
        'class': 'emr-navigation-item-icon'
    },
    standalone: false
})
export class NavigationItemIconDirective {
  public readonly templateRef = inject(TemplateRef, { optional: true });
}
