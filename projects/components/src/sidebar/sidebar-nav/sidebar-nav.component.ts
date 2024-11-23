import { Component, input } from '@angular/core';
import { EmrNavigationModule, NavigationItem, NavigationItemBadgeDirective } from '@elementar/components/navigation';
import { MatIcon } from '@angular/material/icon';
import { OrderByPipe } from '@elementar/components/core';
import { RouterLink } from '@angular/router';
import { MatBadge } from '@angular/material/badge';

@Component({
    selector: 'emr-sidebar-nav',
    imports: [
        EmrNavigationModule,
        MatIcon,
        OrderByPipe,
        RouterLink,
        NavigationItemBadgeDirective,
        MatBadge
    ],
    templateUrl: './sidebar-nav.component.html',
    styleUrl: './sidebar-nav.component.scss'
})
export class SidebarNavComponent<T extends NavigationItem> {
  activeKey = input();
  navItems = input<T[]>([]);
}
