import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'line-chart',
    loadChildren: () => import('./line-chart/line-chart.module').then(c => c.LineChartModule)
  },
  {
    path: 'bar-chart',
    loadChildren: () => import('./bar-chart/bar-chart.module').then(c => c.BarChartModule)
  },
  {
    path: 'pie-chart',
    loadChildren: () => import('./pie-chart/pie-chart.module').then(c => c.PieChartModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MicroChartsRoutingModule { }
