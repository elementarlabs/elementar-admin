import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'colors',
    loadChildren: () => import('./colors/colors.module').then(m => m.ColorsModule)
  },
  {
    path: 'themes',
    loadChildren: () => import('./themes/themes.module').then(m => m.ThemesModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomizationRoutingModule { }
