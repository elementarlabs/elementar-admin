import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'posts/list',
    loadComponent: () => import('./post-list/post-list.component').then(c => c.PostListComponent)
  },
  {
    path: 'posts/new',
    loadComponent: () => import('./post-manage/post-manage.component').then(c => c.PostManageComponent)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }
