import { Component, inject, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { Location } from '@angular/common';
import { LayoutBodyComponent, LayoutComponent, LayoutSidebarComponent } from '@elementar-ui/components/layout';
import { NavigationComponent, NavigationItemComponent } from '@elementar-ui/components/navigation';

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
  activeLinkId!: string | null;
  navItems: NavItem[] = [
    {
      name: 'My Profile',
      link: '/account/settings/my-profile'
    },
    {
      name: 'Security',
      link: '/account/settings/security'
    },
    {
      name: 'Notifications',
      link: '/account/settings/notifications'
    },
    {
      name: 'Billing',
      link: '/account/settings/billing'
    },
    {
      name: 'Cookie',
      link: '/account/settings/cookie'
    },
    {
      name: 'Data Export',
      link: '/account/settings/data-export'
    },
    {
      name: 'Sessions',
      link: '/account/settings/sessions'
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
