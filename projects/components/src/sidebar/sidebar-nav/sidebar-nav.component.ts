import { Component, contentChild, input, output, TemplateRef } from '@angular/core';
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
import { SidebarNavItemIconDirective } from '../sidebar-nav-item-icon.directive';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'emr-sidebar-nav',
  exportAs: 'emrSidebarNav',
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
    MatBadge,
    NgTemplateOutlet
  ],
  styleUrl: './sidebar-nav.component.scss',
  templateUrl: './sidebar-nav.component.html',
  host: {
    'class': 'emr-sidebar-nav',
  },
})
export class SidebarNavComponent<T extends NavigationItem> {
  protected _itemIconRef = contentChild(SidebarNavItemIconDirective);

  activeKey = input();
  navItems = input<T[]>([]);

  readonly itemClicked = output<any>();

  get iconTemplateRef(): TemplateRef<any> {
    return this._itemIconRef()?.templateRef as TemplateRef<any>;
  }
}
