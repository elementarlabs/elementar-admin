import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./common/common.component').then(c => c.CommonComponent),
    children: [
      {
        path: 'my-profile',
        loadComponent: () => import('./my-profile/my-profile.component').then(c => c.MyProfileComponent),
      },
      {
        path: 'security',
        loadComponent: () => import('./security/security.component').then(c => c.SecurityComponent),
      },
      {
        path: 'notifications',
        loadComponent: () => import('./notifications/notifications.component').then(c => c.NotificationsComponent),
      },
      {
        path: 'billing',
        loadComponent: () => import('./billing/billing.component').then(c => c.BillingComponent),
      },
      {
        path: 'data-export',
        loadComponent: () => import('./data-export/data-export.component').then(c => c.DataExportComponent),
      },
      {
        path: 'sessions',
        loadComponent: () => import('./sessions/sessions.component').then(c => c.SessionsComponent),
      },
      {
        path: 'cookie',
        loadComponent: () => import('./cookie/cookie.component').then(c => c.CookieComponent),
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'my-profile'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
