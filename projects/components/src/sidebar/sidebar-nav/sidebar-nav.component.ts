import { Component, input } from '@angular/core';
import { NavigationItem, NavigationItemBadgeDirective } from '@elementar/components/navigation';
import { MatIcon } from '@angular/material/icon';
import { OrderByPipe } from '@elementar/components/core';
import { RouterLink } from '@angular/router';
import { MatBadge } from '@angular/material/badge';
import { NavigationComponent } from '../../navigation/navigation/navigation.component';
import { NavigationItemComponent } from '../../navigation/navigation-item/navigation-item.component';
import { NavigationHeadingComponent } from '../../navigation/navigation-heading/navigation-heading.component';
import { NavigationDividerComponent } from '../../navigation/navigation-divider/navigation-divider.component';
import { NavigationGroupComponent } from '../../navigation/navigation-group/navigation-group.component';
import { NavigationGroupToggleComponent } from '../../navigation/navigation-group-toggle/navigation-group-toggle.component';
import { NavigationGroupMenuComponent } from '../../navigation/navigation-group-menu/navigation-group-menu.component';
import { NavigationItemIconDirective } from '../../navigation/navigation-item-icon.directive';
import { NavigationGroupToggleIconDirective } from '../../navigation/navigation-group-toggle-icon.directive';

@Component({
    selector: 'emr-sidebar-nav',
    imports: [
    NavigationComponent,
    NavigationItemComponent,
    NavigationHeadingComponent,
    NavigationDividerComponent,
    NavigationGroupComponent,
    NavigationGroupToggleComponent,
    NavigationGroupMenuComponent,
    NavigationItemIconDirective,
    NavigationGroupToggleIconDirective,
    MatIcon,
    OrderByPipe,
    RouterLink,
    NavigationItemBadgeDirective,
    MatBadge
],
    templateUrl: './sidebar-nav.component.html',
    styleUrl: './sidebar-nav.component.scss'
})
export class SidebarNavComponent<T extends NavigationItem> {
  activeKey = input();
  navItems = input<T[]>([]);
}
