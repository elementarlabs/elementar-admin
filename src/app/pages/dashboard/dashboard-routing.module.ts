import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    title: 'Basic Dashboard',
    loadComponent: () => import('./basic/basic.component').then(c => c.BasicComponent)
  },
  {
    path: 'ecommerce',
    title: 'Ecommerce Dashboard',
    loadComponent: () => import('./ecommerce/ecommerce.component').then(c => c.EcommerceComponent)
  },
  {
    path: 'banking',
    title: 'Banking Dashboard',
    loadComponent: () => import('./banking/banking.component').then(c => c.BankingComponent)
  },
  {
    path: 'echarts',
    title: 'Echarts Dashboard',
    loadChildren: () => import('./echarts/echarts.module').then(m => m.EchartsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
