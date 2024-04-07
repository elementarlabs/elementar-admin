import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'internal-server-error',
    loadComponent: () => import('./internal-server-error/internal-server-error.component').then(c => c.InternalServerErrorComponent)
  },
  {
    path: 'not-found',
    loadComponent: () => import('./not-found/not-found.component').then(c => c.NotFoundComponent)
  },
  {
    path: 'access-denied',
    loadComponent: () => import('./access-denied/access-denied.component').then(c => c.AccessDeniedComponent)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorRoutingModule { }
