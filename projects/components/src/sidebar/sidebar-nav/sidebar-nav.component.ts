import { Component, input } from '@angular/core';
import { EmrNavigationModule, NavigationItem } from '@elementar/components/navigation';
import { MatIcon } from '@angular/material/icon';
import { OrderByPipe } from '@elementar/components/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'emr-sidebar-nav',
  standalone: true,
  imports: [
    EmrNavigationModule,
    MatIcon,
    OrderByPipe,
    RouterLink
  ],
  templateUrl: './sidebar-nav.component.html',
  styleUrl: './sidebar-nav.component.scss'
})
export class SidebarNavComponent {
  activeKey = input();
  navItems = input<NavigationItem[]>([]);
}
