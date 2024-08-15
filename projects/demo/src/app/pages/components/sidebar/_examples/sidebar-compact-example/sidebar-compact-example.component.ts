import { Component } from '@angular/core';
import {
  SidebarBodyComponent,
  SidebarComponent,
  SidebarFooterComponent,
  SidebarHeaderComponent,
  SidebarNavComponent
} from '@elementar/components/sidebar';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { NavigationItem } from '@elementar/components/navigation';
import { FormsModule } from '@angular/forms';

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
    SidebarBodyComponent
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
    }
  ];
}
