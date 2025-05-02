import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'messenger',
    loadChildren: () => import('./messenger/messenger.module').then(m => m.MessengerModule),
    title: 'Messenger'
  },
  {
    path: 'file-manager',
    loadChildren: () => import('./file-manager/file-manager.module').then(m => m.FileManagerModule),
    title: 'File Manager'
  },
  {
    path: 'kanban-board',
    loadChildren: () => import('./kanban-board/kanban-board.module').then(m => m.KanbanBoardModule),
    title: 'Kanban Board'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationsRoutingModule { }
