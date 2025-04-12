import { InjectionToken } from '@angular/core';

export const NAVIGATION = new InjectionToken('Sidebar navigation');

export interface SidebarNavItemInterface {
  id: any;
}

export interface SidebarNavGroupInterface {
  items: SidebarNavItemInterface[];
}
