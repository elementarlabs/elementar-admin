import { Component } from '@angular/core';
import {
  SidebarBodyComponent, SidebarCompactViewModeDirective,
  SidebarComponent,
  SidebarFooterComponent, SidebarFullViewModeDirective,
  SidebarHeaderComponent,
  SidebarNavComponent
} from '@elementar/components/sidebar';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { NavigationItem } from '@elementar/components/navigation';
import { FormsModule } from '@angular/forms';
import { v7 as uuid } from 'uuid';

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
        SidebarFullViewModeDirective
    ],
    templateUrl: './sidebar-compact-example.component.html',
    styleUrl: './sidebar-compact-example.component.scss'
})
export class SidebarCompactExampleComponent {
  compact = true;
  navItems: NavigationItem[] = [
    {
      key: 'home',
      type: 'item',
      name: 'Home',
      icon: 'dashboard',
    },
    {
      key: 'forms',
      type: 'item',
      icon: 'dns',
      name: 'Forms'
    },
    {
      key: 'account',
      type: 'item',
      name: 'Account'
    },
    {
      key: 'separator',
      type: 'divider',
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
