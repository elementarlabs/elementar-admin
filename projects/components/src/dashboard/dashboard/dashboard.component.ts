import { AfterContentInit, Component, forwardRef, input, OnInit } from '@angular/core';
import {
  DashboardWidgetConfig,
  DashboardWidgetComponent, DASHBOARD
} from '../types';
import { AsyncPipe, NgComponentOutlet } from '@angular/common';
import { EmrSkeletonModule } from '@elementar/components/skeleton';
import { WidgetSkeletonComponent } from '@elementar/components/dashboard/widget-skeleton/widget-skeleton.component';

@Component({
  selector: 'emr-dashboard',
  exportAs: 'emrDashboard',
  standalone: true,
  imports: [
    EmrSkeletonModule,
    NgComponentOutlet,
    AsyncPipe
  ],
  providers: [
    {
      provide: DASHBOARD,
      useExisting: forwardRef(() => DashboardComponent),
    }
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  host: {
    'class': 'emr-dashboard'
  }
})
export class DashboardComponent implements OnInit, AfterContentInit {
  protected _initialized = false;
  protected _skeletonMap = new Map<string, any>();
  protected _componentsMap = new Map<string, any>();

  components = input<DashboardWidgetComponent[]>([]);
  widgets = input<DashboardWidgetConfig[]>([]);

  protected _allLoaded = false;
  protected _loadedWidgetsCount = 0;

  ngOnInit() {
    if (this.components().length === 0) {
      return;
    }

    this.components().forEach(componentDef => {
      this._skeletonMap.set(componentDef.type, componentDef.skeleton);
    });
    this.components().forEach(async (componentDef, index: number) => {
      this._componentsMap.set(componentDef.type, componentDef.component());
    });

    // this._initialized = true;
  }

  ngAfterContentInit() {
  }

  getSkeletonComponent(type: string): any {
    return this._skeletonMap.get(type) || WidgetSkeletonComponent;
  }

  getWidgetComponent(type: string) {
    return this._componentsMap.get(type);
  }

  setWidgetLoaded(id: any) {
    this._loadedWidgetsCount++;
    this._allLoaded = this._loadedWidgetsCount === this.widgets().length;
  }
}
