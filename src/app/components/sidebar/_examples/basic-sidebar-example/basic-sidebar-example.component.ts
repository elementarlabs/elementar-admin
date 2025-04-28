import { Component } from '@angular/core';
import {
  SidebarBodyComponent,
  SidebarComponent,
  SidebarFooterComponent,
  SidebarHeaderComponent,
  SidebarNavComponent,
  SidebarNavGroupComponent,
  SidebarNavGroupMenuComponent,
  SidebarNavGroupToggleComponent,
  SidebarNavHeadingComponent,
  SidebarNavItemComponent,
  SidebarNavItemIconDirective
} from '@elementar-ui/components/sidebar';
import { v7 as uuid } from 'uuid';
import { MatIcon } from '@angular/material/icon';
import {
  SidebarNavGroupToggleIconDirective
} from '@elementar-ui/components/sidebar/sidebar-nav-group-toggle-icon.directive';

@Component({
  selector: 'app-basic-sidebar-example',
  imports: [
    SidebarComponent,
    SidebarHeaderComponent,
    SidebarNavComponent,
    SidebarFooterComponent,
    SidebarBodyComponent,
    SidebarNavItemComponent,
    SidebarNavItemIconDirective,
    MatIcon,
    SidebarNavGroupComponent,
    SidebarNavGroupMenuComponent,
    SidebarNavGroupToggleComponent,
    SidebarNavGroupToggleIconDirective,
    SidebarNavHeadingComponent,
  ],
  templateUrl: './basic-sidebar-example.component.html',
  styleUrl: './basic-sidebar-example.component.scss'
})
export class BasicSidebarExampleComponent {
  navItems: any[] = [
    {
      key: 'home',
      type: 'item',
      label: 'Home'
    },
    {
      key: 'account',
      type: 'item',
      label: 'Account'
    },
    {
      type: 'group',
      label: 'Nested Menu',
      icon: 'tune',
      children: [
        {
          key: uuid(),
          type: 'item',
          label: 'Nested Item 1'
        },
        {
          key: uuid(),
          type: 'item',
          label: 'Nested Item 2'
        }
      ]
    },
    {
      type: 'heading',
      label: 'Overview'
    },
    {
      key: 'item1',
      type: 'item',
      label: 'Item 1'
    },
    {
      key: 'item2',
      type: 'item',
      label: 'Item 2'
    },
  ];
}
