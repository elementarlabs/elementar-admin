import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'basic',
    title: 'Basic Pricing',
    loadComponent: () => import('./basic/basic.component').then(c => c.BasicComponent)
  },
  {
    path: 'membership-plans',
    title: 'Membership plans',
    loadComponent: () => import('./membership-plans/membership-plans.component').then(c => c.MembershipPlansComponent)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PricingRoutingModule { }
