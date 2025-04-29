import { Component, inject, OnInit, viewChild } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs';
import { Location } from '@angular/common';
import { v7 as uuid } from 'uuid';
import { MatIconButton } from '@angular/material/button';
import {
  SidebarBodyComponent,
  SidebarCompactViewModeDirective,
  SidebarFooterComponent,
  SidebarFullViewModeDirective,
  SidebarHeaderComponent,
  SidebarNavComponent,
  SidebarComponent as EmrSidebarComponent,
  SidebarNavGroupComponent,
  SidebarNavItemComponent,
  SidebarNavHeadingComponent,
  SidebarNavItemBadgeDirective,
  SidebarNavGroupToggleComponent,
  SidebarNavGroupMenuComponent,
  SidebarNavItemIconDirective, SidebarNavGroupToggleIconDirective
} from '@elementar-ui/components/sidebar';
import { LogoComponent } from '@elementar-ui/components/logo';
import { DicebearComponent } from '@elementar-ui/components/avatar';
import { OrderByPipe } from '@elementar-ui/components/core';
import { ToolbarComponent } from '../../_store/sidebar';

@Component({
  selector: 'app-sidebar',
  imports: [
    MatIcon,
    RouterLink,
    ToolbarComponent,
    EmrSidebarComponent,
    SidebarBodyComponent,
    SidebarCompactViewModeDirective,
    SidebarFullViewModeDirective,
    SidebarFooterComponent,
    SidebarHeaderComponent,
    SidebarNavComponent,
    DicebearComponent,
    MatIconButton,
    LogoComponent,
    SidebarNavGroupComponent,
    SidebarNavItemComponent,
    SidebarNavHeadingComponent,
    SidebarNavItemBadgeDirective,
    SidebarNavGroupToggleIconDirective,
    SidebarNavGroupToggleComponent,
    SidebarNavGroupMenuComponent,
    SidebarNavItemIconDirective,
    OrderByPipe
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  host: {
    'class': 'sidebar',
    '[class.compact]': 'compact'
  }
})
export class SidebarComponent implements OnInit {
  router = inject(Router);
  location = inject(Location);
  height: string | null = '200px';
  compact = false;

  readonly navigation = viewChild.required<any>('navigation');

  navItems: any[] = [
    {
      type: 'group',
      name: 'Dashboard',
      icon: 'dashboard',
      children: [
        {
          key: uuid(),
          type: 'link',
          name: 'Analytics',
          link: '/dashboard/analytics'
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Basic',
          link: '/dashboard/basic'
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Ecommerce',
          link: '/dashboard/ecommerce'
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Finance',
          link: '/dashboard/finance'
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Explore',
          link: '/dashboard/explore'
        }
      ]
    },
    {
      type: 'group',
      name: 'Theme',
      icon: 'tune',
      children: [
        {
          key: uuid(),
          type: 'link',
          name: 'Prebuilt Themes',
          link: '/customization/themes'
        }
      ]
    },
    {
      type: 'heading',
      name: 'Features'
    },
    {
      type: 'group',
      icon: 'hard_drive',
      name: 'Store',
      children: [
        {
          key: uuid(),
          type: 'link',
          name: 'Selects',
          link: '/store/selects'
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Widgets',
          link: '/store/widgets'
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Skeleton',
          link: '/store/skeleton'
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Sidebar Widgets',
          link: '/store/sidebar-widgets'
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Notifications',
          link: '/store/notifications'
        },
      ],
    },
    {
      type: 'group',
      icon: 'apps',
      name: 'Applications',
      children: [
        {
          key: uuid(),
          type: 'link',
          name: 'Messenger',
          link: '/applications/messenger'
        },
        {
          key: uuid(),
          type: 'link',
          name: 'File Manager',
          link: '/applications/file-manager'
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Kanban Board',
          link: '/applications/kanban-board'
        }
      ]
    },
    {
      type: 'group',
      icon: 'lock',
      name: 'Authentication',
      children: [
        {
          key: uuid(),
          type: 'link',
          name: 'Sign In',
          link: '/auth/sign-in'
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Sign Up',
          link: '/auth/signup'
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Forgot Password',
          link: '/auth/forgot-password'
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Password Reset',
          link: '/auth/password-reset'
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Set New Password',
          link: '/auth/set-new-password'
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Done',
          link: '/auth/done'
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Create Account',
          link: '/auth/create-account'
        },
      ]
    },
    {
      type: 'group',
      name: 'User Profile',
      icon: 'person',
      children: [
        {
          key: uuid(),
          type: 'link',
          name: 'Talent Profile',
          link: '/user-profile/talent-profile'
        }
      ]
    },
    {
      type: 'group',
      name: 'Account',
      icon: 'badge',
      children: [
        {
          key: uuid(),
          type: 'link',
          name: 'Settings',
          link: '/account/settings'
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Notifications',
          link: '/account/notifications'
        }
      ]
    },
    {
      type: 'group',
      icon: 'attach_money',
      name: 'Pricing',
      children: [
        {
          key: uuid(),
          type: 'link',
          name: 'Basic',
          link: '/pricing/basic'
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Membership Plans',
          link: '/pricing/membership-plans'
        }
      ]
    },
    {
      type: 'group',
      icon: 'edit_note',
      name: 'Content',
      children: [
        {
          key: uuid(),
          type: 'link',
          name: 'Post List',
          link: '/content/posts/list'
        }
      ]
    },
    {
      type: 'group',
      icon: 'error',
      name: 'Error Pages',
      children: [
        {
          key: uuid(),
          type: 'link',
          name: 'Not Found (404)',
          link: '/error/not-found'
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Not Found 1 (404)',
          link: '/error/not-found-1'
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Server Error (500)',
          link: '/error/internal-server-error'
        },
        {
          key: uuid(),
          type: 'link',
          name: 'Forbidden (401)',
          link: '/error/forbidden'
        }
      ]
    },
    {
      type: 'group',
      icon: 'layers',
      name: 'Service Pages',
      children: [
        {
          key: uuid(),
          type: 'link',
          name: 'Pending Email Activation',
          link: '/service-pages/pending-email-activation'
        }
      ]
    },
    {
      type: 'group',
      icon: 'conversion_path',
      name: 'Onboarding',
      children: [
        {
          key: uuid(),
          type: 'link',
          name: 'Onboarding',
          link: '/onboarding'
        }
      ]
    },
  ];
  navItemLinks: any[] = [];
  activeKey: null | string = null;

  ngOnInit() {
    this.navItems.forEach(navItem => {
      this.navItemLinks.push(navItem);

      if (navItem.children) {
        this.navItemLinks = this.navItemLinks.concat(navItem.children as any[]);
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
      navItem => {
        if (navItem.link === this.location.path()) {
          return true;
        }

        if (navItem.type === 'group') {
          return (this.location.path() !== '/' && this.location.path().includes(navItem.link as string));
        }

        return false;
      }
    );

    if (activeLink) {
      this.activeKey = activeLink.key;
    } else {
      this.activeKey = null;
    }
  }
}
