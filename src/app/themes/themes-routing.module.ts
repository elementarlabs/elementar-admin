import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'prebuilt-themes',
    loadComponent: () => import('./overview/overview.component').then(c => c.OverviewComponent),
    title: 'Prebuilt Themes'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemesRoutingModule { }
