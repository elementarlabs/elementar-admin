import { Component, inject, OnInit } from '@angular/core';
import { LayoutBodyComponent, LayoutComponent, LayoutSidebarComponent } from '@elementar-ui/components';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { Location } from '@angular/common';
import { NavigationComponent, NavigationItemComponent } from '@elementar-ui/components';

export interface NavItem {
  name: string;
  link: string;
}

@Component({
  selector: 'app-common',
  imports: [
    LayoutBodyComponent,
    LayoutComponent,
    LayoutSidebarComponent,
    RouterLink,
    RouterOutlet,
    NavigationComponent,
    NavigationItemComponent
  ],
  templateUrl: './common.component.html',
  styleUrl: './common.component.scss'
})
export class CommonComponent implements OnInit {
  router = inject(Router);
  location = inject(Location);
  activeLinkId: string | null;
  navItems: NavItem[] = [
    {
      name: 'My Profile',
      link: '/pages/account/settings/my-profile'
    },
    {
      name: 'Security',
      link: '/pages/account/settings/security'
    },
    {
      name: 'Notifications',
      link: '/pages/account/settings/notifications'
    },
    {
      name: 'Billing',
      link: '/pages/account/settings/billing'
    },
    {
      name: 'Cookie',
      link: '/pages/account/settings/cookie'
    },
    {
      name: 'Data Export',
      link: '/pages/account/settings/data-export'
    },
    {
      name: 'Sessions',
      link: '/pages/account/settings/sessions'
    }
  ];

  ngOnInit() {
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
    const activeLink = this.navItems.find(
      navItem => navItem.link === this.location.path()
    );

    if (activeLink) {
      this.activeLinkId = activeLink.link;
    } else {
      this.activeLinkId = null;
    }
  }
}
