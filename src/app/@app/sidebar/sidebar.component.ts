import { Component, inject, OnInit, viewChild } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs';
import { Location } from '@angular/common';
import { NavigationItem } from '@elementar/components/navigation';
import {
  SidebarBodyComponent,
  SidebarComponent as EmrSidebarComponent,
  SidebarFooterComponent, SidebarHeaderComponent, SidebarNavComponent
} from '@elementar/components/sidebar';
import { ToolbarComponent } from '@elementar/store/sidebar';

@Component({
  selector: 'app-sidebar',
  imports: [
    RouterLink,
    SidebarBodyComponent,
    EmrSidebarComponent,
    SidebarFooterComponent,
    SidebarHeaderComponent,
    SidebarNavComponent,
    ToolbarComponent
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  host: {
    'class': 'sidebar'
  }
})
export class SidebarComponent implements OnInit {
  router = inject(Router);
  location = inject(Location);
  height: string | null = '200px';
  compact = false;

  readonly navigation = viewChild.required<any>('navigation');

  navItems: NavigationItem[] = [
    {
      key: 'home',
      type: 'link',
      name: 'Home',
      icon: 'home',
      link: '/'
    },
    {
      key: 'item-menu-1',
      type: 'item',
      name: 'Item menu 1',
    },
    {
      key: 'item-menu-2',
      type: 'item',
      name: 'Item menu 2',
    },
  ];
  navItemLinks: NavigationItem[] = [];
  activeKey: any = 'home';

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
