import { InjectionToken } from '@angular/core';

export const LAYOUT = new InjectionToken('LAYOUT');

export interface LayoutSidebarVisibilityChange {
  layoutId: string;
  hidden: boolean;
}
