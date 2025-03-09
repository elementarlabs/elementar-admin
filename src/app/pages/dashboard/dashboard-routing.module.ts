import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'basic',
  },
  {
    path: 'basic',
    title: 'Basic Dashboard',
    loadComponent: () => import('./basic/basic.component').then(c => c.BasicComponent)
  },
  {
    path: 'ecommerce',
    title: 'Ecommerce Dashboard',
    loadComponent: () => import('./ecommerce/ecommerce.component').then(c => c.EcommerceComponent)
  },
  {
    path: 'finance',
    title: 'Finance Dashboard',
    loadComponent: () => import('./finance/finance.component').then(c => c.FinanceComponent)
  },
  {
    path: 'explore',
    title: 'Explore Dashboard',
    loadComponent: () => import('./explore/explore.component').then(c => c.ExploreComponent)
  },
  {
    path: 'analytics',
    title: 'Analytics',
    loadComponent: () => import('./analytics/analytics.component').then(c => c.AnalyticsComponent)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
