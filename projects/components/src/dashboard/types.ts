import { ComponentType } from '@angular/cdk/overlay';

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
