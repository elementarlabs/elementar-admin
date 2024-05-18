import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'line-chart',
    loadChildren: () => import('./line-chart/line-chart.module').then(c => c.LineChartModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MicroChartsRoutingModule { }
