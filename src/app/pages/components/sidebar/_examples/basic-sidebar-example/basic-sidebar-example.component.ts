import { Component } from '@angular/core';
import {
  SidebarBodyComponent,
  SidebarComponent,
  SidebarFooterComponent,
  SidebarHeaderComponent,
  SidebarNavComponent
} from '@elementar-ui/components';
import { NavigationItem } from '@elementar-ui/components';
import { v7 as uuid } from 'uuid';

@Component({
    selector: 'app-basic-sidebar-example',
    imports: [
        SidebarComponent,
        SidebarHeaderComponent,
        SidebarNavComponent,
        SidebarFooterComponent,
        SidebarBodyComponent
    ],
    templateUrl: './basic-sidebar-example.component.html',
    styleUrl: './basic-sidebar-example.component.scss'
})
export class BasicSidebarExampleComponent {
  navItems: NavigationItem[] = [
    {
      key: 'home',
      type: 'item',
      name: 'Home'
    },
    {
      key: 'account',
      type: 'item',
      name: 'Account'
    },
    {
      key: 'nested-menu',
      type: 'group',
      name: 'Nested Menu',
      icon: 'tune',
      children: [
        {
          key: uuid(),
          type: 'item',
          name: 'Nested Item 1'
        },
        {
          key: uuid(),
          type: 'item',
          name: 'Nested Item 2'
        }
      ]
    },
    {
      key: 'heading',
      type: 'heading',
      name: 'Overview'
    },
    {
      key: 'item1',
      type: 'item',
      name: 'Item 1'
    },
    {
      key: 'item2',
      type: 'item',
      name: 'Item 2'
    },
  ];
}
