import { Component, inject, ViewChild } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs';
import { Location } from '@angular/common';
import { MatRipple } from '@angular/material/core';
import { ToolbarComponent } from '@app/sidebar/_toolbar/toolbar.component';
import { EmrNavigationModule } from '@elementar/components/navigation';
import { OrderByPipe } from '@elementar/components/core';

export interface NavItem {
  type: string;
  name: string;
  icon?: string;
  id?: string | number;
  link?: string;
  children?: NavItem[];
}

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

  navItems: NavItem[] = [
    {
      id: 'customization',
      type: 'group',
      name: 'Customization',
      icon: 'tune',
      children: [
        {
          type: 'link',
          name: 'Colors',
          link: '/pages/customization/colors'
        },
        {
          type: 'link',
          name: 'Themes',
          link: '/pages/customization/themes'
        },
        {
          type: 'link',
          name: 'Typography',
          link: '/pages/customization/typography'
        }
      ]
    },
    {
      id: 'baseLayouts',
      type: 'group',
      name: 'Base Layouts',
      icon: 'space_dashboard',
      children: [
        {
          type: 'link',
          name: 'Dual tier sidebar layout',
          link: '/base-layouts/dual-tier-sidebar-layout'
        }
      ]
    },
    {
      id: 'dashboard',
      type: 'group',
      name: 'Dashboard',
      icon: 'dashboard',
      children: [
        {
          type: 'link',
          name: 'Basic',
          link: '/pages/dashboard'
        },
        {
          type: 'link',
          name: 'Ecommerce',
          link: '/pages/dashboard/ecommerce'
        },
        {
          type: 'link',
          name: 'Finance',
          link: '/pages/dashboard/finance'
        }
      ]
    },
    {
      id: 'navigation',
      type: 'group',
      icon: 'menu',
      name: 'Navigation',
      children: [
        {
          type: 'link',
          name: 'Navigation',
          link: '/pages/navigation/navigation'
        },
        {
          type: 'link',
          name: 'Breadcrumbs',
          link: '/pages/navigation/breadcrumbs'
        },
        {
          type: 'link',
          name: 'Tab Panel',
          link: '/pages/navigation/tab-panel'
        },
      ]
    },
    {
      id: 'forms',
      type: 'group',
      icon: 'dns',
      name: 'Forms',
      children: [
        {
          type: 'link',
          name: 'Autocomplete',
          link: '/pages/forms/autocomplete'
        },
        {
          type: 'link',
          name: 'Input',
          link: '/pages/forms/input'
        },
        {
          type: 'link',
          name: 'Buttons',
          link: '/pages/forms/buttons'
        },
        {
          type: 'link',
          name: 'Slide Toggle',
          link: '/pages/forms/slide-toggle'
        },
        {
          type: 'link',
          name: 'Checkbox',
          link: '/pages/forms/checkbox'
        },
        {
          type: 'link',
          name: 'Radio',
          link: '/pages/forms/radio'
        },
        {
          type: 'link',
          name: 'Select',
          link: '/pages/forms/select'
        },
        {
          type: 'link',
          name: 'Segmented',
          link: '/pages/forms/segmented'
        },
        {
          type: 'link',
          name: 'Pin Input',
          link: '/pages/forms/pin-input'
        },
        {
          type: 'link',
          name: 'Number Input',
          link: '/pages/forms/number-input'
        },
        {
          type: 'link',
          name: 'Button Toggle',
          link: '/pages/forms/button-toggle'
        },
        {
          type: 'link',
          name: 'Phone Input',
          link: '/pages/forms/phone-input'
        }
      ]
    },
    {
      id: 'components',
      type: 'group',
      icon: 'grid_view',
      name: 'Components',
      children: [
        {
          type: 'link',
          name: 'Alert',
          link: '/pages/components/alert'
        },
        {
          type: 'link',
          name: 'Bottom Sheet',
          link: '/pages/components/bottom-sheet'
        },
        {
          type: 'link',
          name: 'Card',
          link: '/pages/components/card'
        },
        {
          type: 'link',
          name: 'Carousel',
          link: '/pages/components/carousel'
        },
        {
          type: 'link',
          name: 'Incidents',
          link: '/pages/components/incidents'
        },
        {
          type: 'link',
          name: 'Expand',
          link: '/pages/components/expand'
        },
        {
          type: 'link',
          name: 'Content Fade',
          link: '/pages/components/content-fade'
        },
        {
          type: 'link',
          name: 'Icon',
          link: '/pages/components/icon'
        },
        {
          type: 'link',
          name: 'Badge',
          link: '/pages/components/badge'
        },
        {
          type: 'link',
          name: 'Avatar',
          link: '/pages/components/avatar'
        },
        {
          type: 'link',
          name: 'Block State',
          link: '/pages/components/block-state'
        },
        {
          type: 'link',
          name: 'Chips',
          link: '/pages/components/chips'
        },
        {
          type: 'link',
          name: 'Datepicker',
          link: '/pages/components/datepicker'
        },
        {
          type: 'link',
          name: 'Tabs',
          link: '/pages/components/tabs'
        },
        {
          type: 'link',
          name: 'Menu',
          link: '/pages/components/menu'
        },
        {
          type: 'link',
          name: 'Paginator',
          link: '/pages/components/paginator'
        },
        {
          type: 'link',
          name: 'Popover',
          link: '/pages/components/popover'
        },
        {
          type: 'link',
          name: 'Tooltip',
          link: '/pages/components/tooltip'
        },
        {
          type: 'link',
          name: 'Gauge',
          link: '/pages/components/gauge'
        },
        {
          type: 'link',
          name: 'Slider',
          link: '/pages/components/slider'
        },
        {
          type: 'link',
          name: 'Table',
          link: '/pages/components/table'
        },
        {
          type: 'link',
          name: 'Data View',
          link: '/pages/components/dataview'
        },
        {
          type: 'link',
          name: 'Timeline',
          link: '/pages/components/timeline'
        },
        {
          type: 'link',
          name: 'Dialog',
          link: '/pages/components/dialog'
        },
        {
          type: 'link',
          name: 'Upload',
          link: '/pages/components/upload'
        },
        {
          type: 'link',
          name: 'Panel',
          link: '/pages/components/panel'
        },
        {
          type: 'link',
          name: 'Resizable Container',
          link: '/pages/components/resizable-container'
        },
        {
          type: 'link',
          name: 'Snackbar',
          link: '/pages/components/snackbar'
        },
        {
          type: 'link',
          name: 'Command Bar',
          link: '/pages/components/command-bar'
        },
        {
          type: 'link',
          name: 'Color Picker',
          link: '/pages/components/color-picker'
        },
        {
          type: 'link',
          name: 'Divider',
          link: '/pages/components/divider'
        },
        {
          type: 'link',
          name: 'Skeleton',
          link: '/pages/components/skeleton'
        },
        {
          type: 'link',
          name: 'Filter Builder',
          link: '/pages/components/filter-builder'
        },
        {
          type: 'link',
          name: 'Expansion Panel',
          link: '/pages/components/expansion-panel'
        },
        {
          type: 'link',
          name: 'List',
          link: '/pages/components/list'
        },
        {
          type: 'link',
          name: 'Progress Bar',
          link: '/pages/components/progress-bar'
        },
        {
          type: 'link',
          name: 'Progress Spinner',
          link: '/pages/components/progress-spinner'
        },
        {
          type: 'link',
          name: 'Stepper',
          link: '/pages/components/stepper'
        },
        {
          type: 'link',
          name: 'Toolbar',
          link: '/pages/components/toolbar'
        },
        {
          type: 'link',
          name: 'Tree',
          link: '/pages/components/tree'
        },
        {
          type: 'link',
          name: 'Password Strength',
          link: '/pages/components/password-strength'
        },
        {
          type: 'link',
          name: 'Layout',
          link: '/pages/components/layout'
        },
        {
          type: 'link',
          name: 'Suggestions',
          link: '/pages/components/suggestions'
        },
        {
          type: 'link',
          name: 'Announcement',
          link: '/pages/components/announcement'
        },
        {
          type: 'link',
          name: 'Sidebar Widgets',
          link: '/pages/components/sidebar-widgets'
        },
        {
          type: 'link',
          name: 'Confirm',
          link: '/pages/components/confirm'
        },
        {
          type: 'link',
          name: 'Thumbnail Maker',
          link: '/pages/components/thumbnail-maker'
        },
        {
          type: 'link',
          name: 'Image Viewer',
          link: '/pages/components/image-viewer'
        },
      ]
    },
    {
      id: 'micro-charts',
      type: 'group',
      icon: 'leaderboard',
      name: 'Micro Charts',
      children: [
        {
          type: 'link',
          name: 'Line Chart',
          link: '/pages/micro-charts/line-chart'
        },
        {
          type: 'link',
          name: 'Bar Chart',
          link: '/pages/micro-charts/bar-chart'
        },
        {
          type: 'link',
          name: 'Pie Chart',
          link: '/pages/micro-charts/pie-chart'
        }
      ]
    },
    {
      id: 'auth',
      type: 'group',
      icon: 'lock',
      name: 'Auth',
      children: [
        {
          type: 'link',
          name: 'Sign In',
          link: '/auth/sign-in'
        },
        {
          type: 'link',
          name: 'Sign Up',
          link: '/auth/signup'
        },
        {
          type: 'link',
          name: 'Forgot Password',
          link: '/auth/forgot-password'
        },
        {
          type: 'link',
          name: 'Password Reset',
          link: '/auth/password-reset'
        },
        {
          type: 'link',
          name: 'Set New Password',
          link: '/auth/set-new-password'
        },
        {
          type: 'link',
          name: 'Done',
          link: '/auth/done'
        },
        {
          type: 'link',
          name: 'Create Account',
          link: '/auth/create-account'
        },
      ]
    },
    {
      id: 'profile',
      type: 'group',
      name: 'User Profile',
      icon: 'person',
      children: [
        {
          type: 'link',
          name: 'Talent Profile',
          link: '/pages/user-profile/talent-profile'
        }
      ]
    },
    {
      id: 'account',
      type: 'group',
      name: 'Account',
      icon: 'badge',
      children: [
        {
          type: 'link',
          name: 'Settings',
          link: '/pages/account/settings'
        }
      ]
    },
    {
      id: 'file-manager',
      type: 'group',
      icon: 'backup',
      name: 'File Manager',
      children: [
        {
          type: 'link',
          name: 'Overview',
          link: '/pages/file-manager'
        }
      ]
    },
    {
      id: 'pricing',
      type: 'group',
      icon: 'attach_money',
      name: 'Pricing',
      children: [
        {
          type: 'link',
          name: 'Basic',
          link: '/pages/pricing/basic'
        },
        {
          type: 'link',
          name: 'Membership Plans',
          link: '/pages/pricing/membership-plans'
        }
      ]
    },
    {
      id: 'content',
      type: 'group',
      icon: 'edit_note',
      name: 'Content',
      children: [
        {
          type: 'link',
          name: 'Post List',
          link: '/pages/content/posts/list'
        }
      ]
    },
    {
      id: 'service-pages',
      type: 'group',
      icon: 'layers',
      name: 'Service Pages',
      children: [
        {
          type: 'link',
          name: 'Pending Email Activation',
          link: '/pages/service-pages/pending-email-activation'
        }
      ]
    },
  ];
  navItemLinks: NavItem[] = [];
  activeLinkId: any = '/';

  ngOnInit() {
    this.navItems.forEach(navItem => {
      this.navItemLinks.push(navItem);

      if (navItem.children) {
        this.navItemLinks = this.navItemLinks.concat(navItem.children as NavItem[]);
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
      navItem => navItem.link === this.location.path()
    );

    if (activeLink) {
      this.activeLinkId = activeLink.link;
    } else {
      this.activeLinkId = null;
    }
  }
}
