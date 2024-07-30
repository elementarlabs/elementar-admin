import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'colors',
    title: 'Colors',
    loadChildren: () => import('./colors/colors.module').then(m => m.ColorsModule)
  },
  {
    path: 'themes',
    title: 'Themes',
    loadChildren: () => import('./themes/themes.module').then(m => m.ThemesModule)
  },
  {
    path: 'typography',
    title: 'Typography',
    loadComponent: () => import('./typography/typography.component').then(m => m.TypographyComponent)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomizationRoutingModule { }
