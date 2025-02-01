import { Component, input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MatBadge } from '@angular/material/badge';
import {
  NavigationComponent,
  NavigationDividerComponent,
  NavigationGroupComponent,
  NavigationGroupMenuComponent,
  NavigationGroupToggleComponent,
  NavigationGroupToggleIconDirective,
  NavigationHeadingComponent, NavigationItem, NavigationItemBadgeDirective,
  NavigationItemComponent,
  NavigationItemIconDirective
} from '../../navigation';
import { OrderByPipe } from '../../core';

@Component({
  exportAs: 'emrSidebarNav',
  host: {
    'class': 'emr-sidebar-nav',
  },
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
  selector: 'emr-sidebar-nav',
  styleUrl: './sidebar-nav.component.scss',
  templateUrl: './sidebar-nav.component.html'
})
export class SidebarNavComponent<T extends NavigationItem> {
  activeKey = input();
  navItems = input<T[]>([]);
}
