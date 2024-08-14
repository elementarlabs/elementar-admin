import { Component, inject, ViewChild } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs';
import { Location } from '@angular/common';
import { MatRipple } from '@angular/material/core';
import { ToolbarComponent } from '@demo/app/sidebar/_toolbar/toolbar.component';
import { EmrNavigationModule, NavigationItem } from '@elementar/components/navigation';
import { OrderByPipe } from '@elementar/components/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    MatIcon,
    RouterLink,
    EmrNavigationModule,
    MatRipple,
    ToolbarComponent,
    OrderByPipe
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

  @ViewChild('navigation', { static: true })
  navigation!: any;

  navItems: NavigationItem[] = [
    {
      key: 'customization',
      type: 'group',
      name: 'Customization',
      icon: 'tune',
      children: [
        {
          key: crypto.randomUUID(),
          type: 'link',
          name: 'Colors',
          link: '/pages/customization/colors'
        },
        {
          key: crypto.randomUUID(),
          type: 'link',
          name: 'Themes',
          link: '/pages/customization/themes'
        },
        {
          key: crypto.randomUUID(),
          type: 'link',
          name: 'Typography',
          link: '/pages/customization/typography'
        }
      ]
    },
    {
      key: 'dashboard',
      type: 'group',
      name: 'Dashboard',
      icon: 'dashboard',
      children: [
        {
          key: crypto.randomUUID(),
          type: 'link',
          name: 'Basic',
          link: '/pages/dashboard'
        },
        {
          key: crypto.randomUUID(),
          type: 'link',
          name: 'Ecommerce',
          link: '/pages/dashboard/ecommerce'
        },
        {
          key: crypto.randomUUID(),
          type: 'link',
          name: 'Finance',
          link: '/pages/dashboard/finance'
        }
      ]
    },
    {
      key: 'navigation',
      type: 'group',
      icon: 'menu',
      name: 'Navigation',
      children: [
        {
          key: crypto.randomUUID(),
          type: 'link',
          name: 'Navigation',
          link: '/pages/navigation/navigation'
        },
        {
          key: crypto.randomUUID(),
          type: 'link',
          name: 'Breadcrumbs',
          link: '/pages/navigation/breadcrumbs'
        },
        {
          key: crypto.randomUUID(),
          type: 'link',
          name: 'Tab Panel',
          link: '/pages/navigation/tab-panel'
        },
      ]
    },
    {
      key: 'forms',
      type: 'group',
      icon: 'dns',
      name: 'Forms',
      children: [
        {
          key: crypto.randomUUID(),
          type: 'link',
          name: 'Autocomplete',
          link: '/pages/forms/autocomplete'
        },
        {
          key: crypto.randomUUID(),
          type: 'link',
          name: 'Input',
          link: '/pages/forms/input'
        },
        {
          key: crypto.randomUUID(),
          type: 'link',
          name: 'Buttons',
          link: '/pages/forms/buttons'
        },
        {
          key: crypto.randomUUID(),
          type: 'link',
          name: 'Slide Toggle',
          link: '/pages/forms/slide-toggle'
        },
        {
          key: crypto.randomUUID(),
          type: 'link',
          name: 'Checkbox',
          link: '/pages/forms/checkbox'
        },
        {
          key: crypto.randomUUID(),
          type: 'link',
          name: 'Radio',
          link: '/pages/forms/radio'
        },
        {
          key: crypto.randomUUID(),
          type: 'link',
          name: 'Select',
          link: '/pages/forms/select'
        },
        {
          key: crypto.randomUUID(),
          type: 'link',
          name: 'Segmented',
          link: '/pages/forms/segmented'
        },
        {
          key: crypto.randomUUID(),
          type: 'link',
          name: 'Pin Input',
          link: '/pages/forms/pin-input'
        },
        {
          key: crypto.randomUUID(),
          type: 'link',
          name: 'Number Input',
          link: '/pages/forms/number-input'
        },
        {
          key: crypto.randomUUID(),
          type: 'link',
          name: 'Button Toggle',
          link: '/pages/forms/button-toggle'
        },
        {
          key: crypto.randomUUID(),
          type: 'link',
          name: 'Phone Input',
          link: '/pages/forms/phone-input'
        }
      ]
    },
    {
      key: 'components',
      type: 'group',
      icon: 'grid_view',
      name: 'Components',
      children: [
        {
          key: crypto.randomUUID(),
          type: 'link',
          name: 'Alert',
          link: '/pages/components/alert'
        },
        {
          key: crypto.randomUUID(),
          type: 'link',
          name: 'Bottom Sheet',
          link: '/pages/components/bottom-sheet'
        },
        {
          key: crypto.randomUUID(),
          type: 'link',
          name: 'Card',
          link: '/pages/components/card'
        },
        {
          key: crypto.randomUUID(),
          type: 'link',
          name: 'Card Overlay',
          link: '/pages/components/card-overlay'
        },
        {
          key: crypto.randomUUID(),
          type: 'link',
          name: 'Carousel',
          link: '/pages/components/carousel'
        },
        {
          key: crypto.randomUUID(),
          type: 'link',
          name: 'Incidents',
          link: '/pages/components/incidents'
        },
        {
          key: crypto.randomUUID(),
          type: 'link',
          name: 'Expand',
          link: '/pages/components/expand'
        },
        {
          key: crypto.randomUUID(),
          type: 'link',
          name: 'Content Fade',
          link: '/pages/components/content-fade'
        },
        {
          key: crypto.randomUUID(),
          type: 'link',
          name: 'Icon',
          link: '/pages/components/icon'
        },
        {
          key: crypto.randomUUID(),
          type: 'link',
          name: 'Badge',
          link: '/pages/components/badge'
        },
        {
          key: crypto.randomUUID(),
          type: 'link',
          name: 'Avatar',
          link: '/pages/components/avatar'
        },
        {
          key: crypto.randomUUID(),
          type: 'link',
          name: 'Block State',
          link: '/pages/components/block-state'
        },
        {
          key: crypto.randomUUID(),
          type: 'link',
          name: 'Chips',
          link: '/pages/components/chips'
        },
        {
          key: crypto.randomUUID(),
          type: 'link',
          name: 'Datepicker',
          link: '/pages/components/datepicker'
        },
        {
          key: crypto.randomUUID(),
          type: 'link',
          name: 'Tabs',
          link: '/pages/components/tabs'
        },
        {
          key: crypto.randomUUID(),
          type: 'link',
          name: 'Menu',
          link: '/pages/components/menu'
        },
        {
          key: crypto.randomUUID(),
          type: 'link',
          name: 'Paginator',
          link: '/pages/components/paginator'
        },
        {
          key: crypto.randomUUID(),
          type: 'link',
          name: 'Popover',
          link: '/pages/components/popover'
        },
        {
          key: crypto.randomUUID(),
          type: 'link',
          name: 'Tooltip',
          link: '/pages/components/tooltip'
        },
        {
          key: crypto.randomUUID(),
          type: 'link',
          name: 'Gauge',
          link: '/pages/components/gauge'
        },
        {
          key: crypto.randomUUID(),
          type: 'link',
          name: 'Slider',
          link: '/pages/components/slider'
        },
        {
          key: crypto.randomUUID(),
          type: 'link',
          name: 'Table',
          link: '/pages/components/table'
        },
        {
          key: crypto.randomUUID(),
          type: 'link',
          name: 'Data View',
          link: '/pages/components/dataview'
        },
        {
          key: crypto.randomUUID(),
          type: 'link',
          name: 'Timeline',
          link: '/pages/components/timeline'
        },
        {
          key: crypto.randomUUID(),
          type: 'link',
          name: 'Dialog',
          link: '/pages/components/dialog'
        },
        {
          key: crypto.randomUUID(),
          type: 'link',
          name: 'Upload',
          link: '/pages/components/upload'
        },
        {
          key: crypto.randomUUID(),
          type: 'link',
          name: 'Panel',
          link: '/pages/components/panel'
        },
        {
          key: crypto.randomUUID(),
          type: 'link',
          name: 'Resizable Container',
          link: '/pages/components/resizable-container'
        },
        {
          key: crypto.randomUUID(),
          type: 'link',
          name: 'Snackbar',
          link: '/pages/components/snackbar'
        },
        {
          key: crypto.randomUUID(),
          type: 'link',
          name: 'Command Bar',
          link: '/pages/components/command-bar'
        },
        {
          key: crypto.randomUUID(),
          type: 'link',
          name: 'Color Picker',
          link: '/pages/components/color-picker'
        },
        {
          key: crypto.randomUUID(),
          type: 'link',
          name: 'Divider',
          link: '/pages/components/divider'
        },
        {
          key: crypto.randomUUID(),
          type: 'link',
          name: 'Skeleton',
          link: '/pages/components/skeleton'
        },
        {
          key: crypto.randomUUID(),
          type: 'link',
          name: 'Filter Builder',
          link: '/pages/components/filter-builder'
        },
        {
          key: crypto.randomUUID(),
          type: 'link',
          name: 'Expansion Panel',
          link: '/pages/components/expansion-panel'
        },
        {
          key: crypto.randomUUID(),
          type: 'link',
          name: 'List',
          link: '/pages/components/list'
        },
        {
          key: crypto.randomUUID(),
          type: 'link',
          name: 'Progress Bar',
          link: '/pages/components/progress-bar'
        },
        {
          key: crypto.randomUUID(),
          type: 'link',
          name: 'Progress Spinner',
          link: '/pages/components/progress-spinner'
        },
        {
          key: crypto.randomUUID(),
          type: 'link',
          name: 'Stepper',
          link: '/pages/components/stepper'
        },
        {
          key: crypto.randomUUID(),
          type: 'link',
          name: 'Toolbar',
          link: '/pages/components/toolbar'
        },
        {
          key: crypto.randomUUID(),
          type: 'link',
          name: 'Tree',
          link: '/pages/components/tree'
        },
        {
          key: crypto.randomUUID(),
          type: 'link',
          name: 'Password Strength',
          link: '/pages/components/password-strength'
        },
        {
          key: crypto.randomUUID(),
          type: 'link',
          name: 'Layout',
          link: '/pages/components/layout'
        },
        {
          key: crypto.randomUUID(),
          type: 'link',
          name: 'Suggestions',
          link: '/pages/components/suggestions'
        },
        {
          key: crypto.randomUUID(),
          type: 'link',
          name: 'Announcement',
          link: '/pages/components/announcement'
        },
        {
          key: crypto.randomUUID(),
          type: 'link',
          name: 'Sidebar',
          link: '/pages/components/sidebar'
        },
        {
          key: crypto.randomUUID(),
          type: 'link',
          name: 'Sidebar Widgets',
          link: '/pages/components/sidebar-widgets'
        },
        {
          key: crypto.randomUUID(),
          type: 'link',
          name: 'Confirm',
          link: '/pages/components/confirm'
        },
        {
          key: crypto.randomUUID(),
          type: 'link',
          name: 'Thumbnail Maker',
          link: '/pages/components/thumbnail-maker'
        },
        {
          key: crypto.randomUUID(),
          type: 'link',
          name: 'Image Viewer',
          link: '/pages/components/image-viewer'
        },
        {
          key: crypto.randomUUID(),
          type: 'link',
          name: 'Comment Editor',
          link: '/pages/components/comment-editor'
        },
      ]
    },
    {
      key: 'micro-charts',
      type: 'group',
      icon: 'leaderboard',
      name: 'Micro Charts',
      children: [
        {
          key: crypto.randomUUID(),
          type: 'link',
          name: 'Line Chart',
          link: '/pages/micro-charts/line-chart'
        },
        {
          key: crypto.randomUUID(),
          type: 'link',
          name: 'Bar Chart',
          link: '/pages/micro-charts/bar-chart'
        },
        {
          key: crypto.randomUUID(),
          type: 'link',
          name: 'Pie Chart',
          link: '/pages/micro-charts/pie-chart'
        }
      ]
    },
    {
      key: 'auth',
      type: 'group',
      icon: 'lock',
      name: 'Auth',
      children: [
        {
          key: crypto.randomUUID(),
          type: 'link',
          name: 'Sign In',
          link: '/auth/sign-in'
        },
        {
          key: crypto.randomUUID(),
          type: 'link',
          name: 'Sign Up',
          link: '/auth/signup'
        },
        {
          key: crypto.randomUUID(),
          type: 'link',
          name: 'Forgot Password',
          link: '/auth/forgot-password'
        },
        {
          key: crypto.randomUUID(),
          type: 'link',
          name: 'Password Reset',
          link: '/auth/password-reset'
        },
        {
          key: crypto.randomUUID(),
          type: 'link',
          name: 'Set New Password',
          link: '/auth/set-new-password'
        },
        {
          key: crypto.randomUUID(),
          type: 'link',
          name: 'Done',
          link: '/auth/done'
        },
        {
          key: crypto.randomUUID(),
          type: 'link',
          name: 'Create Account',
          link: '/auth/create-account'
        },
      ]
    },
    {
      key: 'profile',
      type: 'group',
      name: 'User Profile',
      icon: 'person',
      children: [
        {
          key: crypto.randomUUID(),
          type: 'link',
          name: 'Talent Profile',
          link: '/pages/user-profile/talent-profile'
        }
      ]
    },
    {
      key: 'account',
      type: 'group',
      name: 'Account',
      icon: 'badge',
      children: [
        {
          key: crypto.randomUUID(),
          type: 'link',
          name: 'Settings',
          link: '/pages/account/settings'
        }
      ]
    },
    {
      key: 'file-manager',
      type: 'group',
      icon: 'backup',
      name: 'File Manager',
      children: [
        {
          key: crypto.randomUUID(),
          type: 'link',
          name: 'Overview',
          link: '/pages/file-manager'
        }
      ]
    },
    {
      key: 'pricing',
      type: 'group',
      icon: 'attach_money',
      name: 'Pricing',
      children: [
        {
          key: crypto.randomUUID(),
          type: 'link',
          name: 'Basic',
          link: '/pages/pricing/basic'
        },
        {
          key: crypto.randomUUID(),
          type: 'link',
          name: 'Membership Plans',
          link: '/pages/pricing/membership-plans'
        }
      ]
    },
    {
      key: 'content',
      type: 'group',
      icon: 'edit_note',
      name: 'Content',
      children: [
        {
          key: crypto.randomUUID(),
          type: 'link',
          name: 'Post List',
          link: '/pages/content/posts/list'
        }
      ]
    },
    {
      key: 'service-pages',
      type: 'group',
      icon: 'layers',
      name: 'Service Pages',
      children: [
        {
          key: crypto.randomUUID(),
          type: 'link',
          name: 'Pending Email Activation',
          link: '/pages/service-pages/pending-email-activation'
        }
      ]
    },
  ];
  navItemLinks: NavigationItem[] = [];
  activeLinkId: null | string = null;

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
        (this.location.path() !== '/' && this.location.path().includes(navItem.link as string))
    );

    if (activeLink) {
      this.activeLinkId = activeLink.link as string;
    } else {
      this.activeLinkId = null;
    }
  }
}
