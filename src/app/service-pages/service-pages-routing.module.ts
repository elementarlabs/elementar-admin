import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'pending-email-activation',
    loadComponent: () => import('./pending-email-activation/pending-email-activation.component').then(c => c.PendingEmailActivationComponent),
    title: 'Pending Email Activation'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicePagesRoutingModule { }
