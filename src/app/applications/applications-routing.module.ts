import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'messenger',
    loadChildren: () => import('./messenger/messenger.module').then(m => m.MessengerModule),
  },
  {
    path: 'file-manager',
    loadChildren: () => import('./file-manager/file-manager.module').then(m => m.FileManagerModule),
  },
  {
    path: 'kanban-board',
    loadChildren: () => import('./kanban-board/kanban-board.module').then(m => m.KanbanBoardModule),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationsRoutingModule { }
