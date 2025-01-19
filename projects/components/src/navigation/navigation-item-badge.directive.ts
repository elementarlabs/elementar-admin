import { Directive } from '@angular/core';

@Directive({
  selector: '[emrNavigationItemBadge]',
  exportAs: 'emrNavigationItemBadge',
  standalone: true,
  host: {
    'class': 'emr-navigation-item-badge',
  }
})
export class NavigationItemBadgeDirective {

}
