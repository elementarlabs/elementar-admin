import { Component } from '@angular/core';
import {
  SidebarBodyComponent, SidebarCompactViewModeDirective,
  SidebarComponent,
  SidebarFooterComponent,
  SidebarHeaderComponent,
  SidebarNavComponent
} from '@elementar/components/sidebar';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { NavigationItem } from '@elementar/components/navigation';
import { FormsModule } from '@angular/forms';
import { v7 as uuid } from 'uuid';

@Component({
  selector: 'app-sidebar-compact-example',
  standalone: true,
  imports: [
    SidebarComponent,
    SidebarFooterComponent,
    SidebarHeaderComponent,
    SidebarNavComponent,
    MatSlideToggle,
    FormsModule,
    SidebarBodyComponent,
    SidebarCompactViewModeDirective
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
  ];
}
