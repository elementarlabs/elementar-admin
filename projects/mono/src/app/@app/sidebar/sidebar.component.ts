import { Component, inject, viewChild } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs';
import { Location } from '@angular/common';
import { ToolbarAComponent } from '@elementar/store/sidebar';
import { OrderByPipe } from '@elementar-ui/components/core';
import {
  NavigationComponent,
  NavigationGroupComponent,
  NavigationGroupMenuComponent,
  NavigationGroupToggleComponent, NavigationHeadingComponent,
  NavigationItem, NavigationItemComponent
} from '@elementar-ui/components/navigation';

@Component({
  selector: 'app-sidebar',
  imports: [
    MatIcon,
    RouterLink,
    OrderByPipe,
    ToolbarAComponent,
    NavigationGroupToggleComponent,
    NavigationGroupMenuComponent,
    NavigationItemComponent,
    NavigationGroupComponent,
    NavigationHeadingComponent,
    NavigationComponent
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  host: {
    'class': 'sidebar'
  }
})
export class SidebarComponent {
  router = inject(Router);
  location = inject(Location);
  height: string | null = '200px';

  readonly navigation = viewChild.required<any>('navigation');

  navItems: NavigationItem[] = [
    {
      key: 'home',
      type: 'link',
      name: 'Dashboard',
      icon: 'home',
      link: '/'
    },
    {
      key: 'reports',
      type: 'item',
      icon: 'equalizer',
      name: 'Reports',
    },
    {
      key: 'settings',
      type: 'item',
      icon: 'settings',
      name: 'Settings',
    }
  ];
  navItemLinks: NavigationItem[] = [];
  activeKey: string | null = 'home';

  ngOnInit() {
    this.navItems.forEach(navItem => {
      this.navItemLinks.push(navItem);

      if (navItem.children) {
        this.navItemLinks = this.navItemLinks.concat(navItem.children as NavigationItem[]);
      }
    });
    this._activateLink();
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      )
      .subscribe(() => {
        this._activateLink();
      })
    ;
  }

  private _activateLink() {
    const activeLink = this.navItemLinks.find(
      navItem =>
        navItem.link === this.location.path() ||
        navItem.link === '/' && this.location.path() === ''
    );

    if (activeLink) {
      this.activeKey = activeLink.key;
    } else {
      this.activeKey = null;
    }
  }
}
