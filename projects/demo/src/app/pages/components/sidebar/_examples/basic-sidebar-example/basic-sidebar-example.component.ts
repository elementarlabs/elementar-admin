import { Component } from '@angular/core';
import {
  SidebarComponent,
  SidebarFooterComponent,
  SidebarHeaderComponent,
  SidebarNavComponent
} from '@elementar/components/sidebar';
import { NavigationItem } from '@elementar/components/navigation';

@Component({
  selector: 'app-basic-sidebar-example',
  standalone: true,
  imports: [
    SidebarComponent,
    SidebarHeaderComponent,
    SidebarNavComponent,
    SidebarFooterComponent
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
    }
  ];
}
