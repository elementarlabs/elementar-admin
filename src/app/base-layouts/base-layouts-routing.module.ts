import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dual-tier-sidebar-layout',
    loadComponent:
      () => import('./dual-tier-sidebar-layout/dual-tier-sidebar-layout.component')
      .then(c => c.DualTierSidebarLayoutComponent)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseLayoutsRoutingModule { }
