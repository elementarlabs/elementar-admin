import { Component } from '@angular/core';
import { v7 as uuid } from 'uuid';
import {
  SidebarBodyComponent,
  SidebarComponent,
  SidebarFooterComponent,
  SidebarHeaderComponent,
  SidebarNavComponent,
  SidebarNavDividerComponent,
  SidebarNavGroupComponent,
  SidebarNavGroupMenuComponent,
  SidebarNavGroupToggleComponent,
  SidebarNavGroupToggleIconDirective,
  SidebarNavHeadingComponent, SidebarNavItemComponent,
  SidebarNavItemIconDirective
} from '@elementar-ui/components/sidebar';
import { IconComponent } from '@elementar-ui/components/icon';

@Component({
  selector: 'app-sidebar-with-custom-icons-example',
  imports: [
    SidebarComponent,
    SidebarHeaderComponent,
    SidebarNavComponent,
    SidebarFooterComponent,
    SidebarBodyComponent,
    SidebarNavItemIconDirective,
    IconComponent,
    SidebarNavDividerComponent,
    SidebarNavGroupComponent,
    SidebarNavGroupMenuComponent,
    SidebarNavGroupToggleComponent,
    SidebarNavGroupToggleIconDirective,
    SidebarNavHeadingComponent,
    SidebarNavItemComponent
  ],
  templateUrl: './sidebar-with-custom-icons-example.component.html',
  styleUrl: './sidebar-with-custom-icons-example.component.scss'
})
export class SidebarWithCustomIconsExampleComponent {
  navItems: any[] = [
    {
      key: 'home',
      type: 'item',
      label: 'Home',
      icon: 'ph:house-duotone',
    },
    {
      key: 'account',
      type: 'item',
      label: 'Account',
      icon: 'ph:user-duotone',
    },
    {
      type: 'group',
      label: 'Nested Menu',
      icon: 'ph:gear-duotone',
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
  ];
}
