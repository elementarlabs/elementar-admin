import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'pending-email-activation',
    loadComponent: () => import('./pending-email-activation/pending-email-activation.component').then(c => c.PendingEmailActivationComponent),
    title: 'Pending Email Activation'
  },
  {
    path: 'integrations',
    loadComponent: () => import('./integrations/integrations.component').then(c => c.IntegrationsComponent),
    title: 'Integrations'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicePagesRoutingModule { }
