import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'widgets',
    loadChildren: () => import('./widgets/widgets.module').then(m => m.WidgetsModule),
    title: 'Widgets'
  },
  {
    path: 'skeleton',
    loadChildren: () => import('./skeleton/skeleton.module').then(m => m.SkeletonModule),
    title: 'Skeleton'
  },
  {
    path: 'sidebar-widgets',
    loadChildren: () => import('./sidebar-widgets/sidebar.module').then(m => m.SidebarModule),
    title: 'Sidebar Widgets'
  },
  {
    path: 'notifications',
    loadChildren: () => import('./notifications/notifications.module').then(m => m.NotificationsModule),
    title: 'Notifications'
  },
  {
    path: 'selects',
    loadChildren: () => import('./selects/selects.module').then(m => m.SelectsModule),
    title: 'Selects'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
