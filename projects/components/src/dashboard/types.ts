import { ComponentType } from '@angular/cdk/overlay';
import { InjectionToken } from '@angular/core';

export interface DashboardWidgetComponent {
  type: string;
  skeleton?: ComponentType<any> | null;
  component: () => Promise<ComponentType<any>>;
}

export interface DashboardWidgetConfig {
  id: any;
  type: string;
  columns: number;
}

export const DASHBOARD = new InjectionToken('DASHBOARD');
