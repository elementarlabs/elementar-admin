import { InjectionToken, InputSignal } from '@angular/core';

export interface Dashboard {
  markWidgetAsLoaded(id: any): void;
}

export interface WidgetComponent {
  widget: InputSignal<Widget | undefined>;
}

export interface WidgetConfig {
  type: string;
  skeleton?: any;
  component: () => Promise<any>;
}

export interface Widget {
  id: any;
  type: string;
  columns: number;
  skeleton?: {
    minHeight: string;
  }
  [propName: string]: any;
}

export const DASHBOARD = new InjectionToken('DASHBOARD');
