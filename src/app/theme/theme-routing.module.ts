import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'colors',
    loadChildren: () => import('./colors/colors.module').then(c => c.ColorsModule)
  },
  {
    path: 'typography',
    loadComponent: () => import('./typography/typography.component').then(c => c.TypographyComponent)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeRoutingModule { }
