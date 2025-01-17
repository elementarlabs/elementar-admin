import { Component, input } from '@angular/core';
import {
  NavigationComponent,
  NavigationDividerComponent,
  NavigationGroupComponent, NavigationGroupMenuComponent,
  NavigationGroupToggleComponent, NavigationGroupToggleIconDirective,
  NavigationHeadingComponent,
  NavigationItem,
  NavigationItemBadgeDirective,
  NavigationItemComponent, NavigationItemIconDirective
} from '@elementar/components/navigation';
import { MatIcon } from '@angular/material/icon';
import { OrderByPipe } from '@elementar/components/core';
import { RouterLink } from '@angular/router';
import { MatBadge } from '@angular/material/badge';

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
