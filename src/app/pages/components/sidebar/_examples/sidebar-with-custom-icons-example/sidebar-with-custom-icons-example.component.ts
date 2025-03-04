import { Component } from '@angular/core';
import { v7 as uuid } from 'uuid';
import {
  SidebarBodyComponent,
  SidebarComponent,
  SidebarFooterComponent,
  SidebarHeaderComponent,
  SidebarNavComponent, SidebarNavItemIconDirective
} from '@elementar-ui/components/sidebar';
import { IconComponent } from '@elementar-ui/components/icon';
import { NavigationItem } from '@elementar-ui/components/navigation';

@Component({
  selector: 'app-sidebar-with-custom-icons-example',
  imports: [
    SidebarComponent,
    SidebarHeaderComponent,
    SidebarNavComponent,
    SidebarFooterComponent,
    SidebarBodyComponent,
    SidebarNavItemIconDirective,
    IconComponent
  ],
  templateUrl: './sidebar-with-custom-icons-example.component.html',
  styleUrl: './sidebar-with-custom-icons-example.component.scss'
})
export class SidebarWithCustomIconsExampleComponent {
  navItems: NavigationItem[] = [
    {
      key: 'home',
      type: 'item',
      name: 'Home',
      icon: 'ph:house-duotone',
    },
    {
      key: 'account',
      type: 'item',
      name: 'Account',
      icon: 'ph:user-duotone',
    },
    {
      key: 'nested-menu',
      type: 'group',
      name: 'Nested Menu',
      icon: 'ph:gear-duotone',
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
  ];
}
