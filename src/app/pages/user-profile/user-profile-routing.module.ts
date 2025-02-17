import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'talent-profile',
    title: 'Talent Profile',
    loadComponent: () => import('./talent-profile/talent-profile.component').then(c => c.TalentProfileComponent)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserProfileRoutingModule { }
