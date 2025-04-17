import { Component } from '@angular/core';
import {
  SidebarBodyComponent,
  SidebarCompactViewModeDirective,
  SidebarComponent,
  SidebarFooterComponent,
  SidebarFullViewModeDirective,
  SidebarHeaderComponent,
  SidebarNavComponent, SidebarNavDividerComponent, SidebarNavGroupComponent,
  SidebarNavGroupMenuComponent, SidebarNavGroupToggleComponent, SidebarNavGroupToggleIconDirective,
  SidebarNavHeadingComponent,
  SidebarNavItemComponent,
  SidebarNavItemIconDirective
} from '@elementar-ui/components/sidebar';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { v7 as uuid } from 'uuid';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-sidebar-compact-example',
  imports: [
    SidebarComponent,
    SidebarFooterComponent,
    SidebarHeaderComponent,
    SidebarNavComponent,
    MatSlideToggle,
    FormsModule,
    SidebarBodyComponent,
    SidebarCompactViewModeDirective,
    SidebarFullViewModeDirective,
    MatIcon,
    SidebarNavItemIconDirective,
    SidebarNavDividerComponent,
    SidebarNavHeadingComponent,
    SidebarNavItemComponent,
    SidebarNavGroupToggleIconDirective,
    SidebarNavGroupMenuComponent,
    SidebarNavGroupToggleComponent,
    SidebarNavGroupComponent
  ],
  templateUrl: './sidebar-compact-example.component.html',
  styleUrl: './sidebar-compact-example.component.scss'
})
export class SidebarCompactExampleComponent {
  compact = true;
  navItems: any[] = [
    {
      key: 'home',
      type: 'item',
      label: 'Home',
      icon: 'dashboard',
    },
    {
      key: 'forms',
      type: 'item',
      icon: 'dns',
      label: 'Forms'
    },
    {
      key: 'account',
      type: 'item',
      label: 'Account'
    },
    {
      type: 'divider',
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
