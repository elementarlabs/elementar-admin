import {
  AfterContentInit,
  Component,
  forwardRef,
  input,
  OnInit,
  signal
} from '@angular/core';
import {
  Widget,
  DASHBOARD, WidgetConfig
} from '../types';
import { AsyncPipe, NgComponentOutlet } from '@angular/common';
import { EmrSkeletonModule } from '@elementar/components/skeleton';
import { WidgetSkeletonComponent } from '@elementar/components/dashboard/widget-skeleton/widget-skeleton.component';

@Component({
    selector: 'emr-dashboard',
    exportAs: 'emrDashboard',
    imports: [
        EmrSkeletonModule,
        NgComponentOutlet,
        AsyncPipe,
        WidgetSkeletonComponent
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
export class DashboardComponent implements OnInit {
  protected _skeletonMap = new Map<string, any>();
  protected _componentsMap = new Map<string, any>();

  configs = input<WidgetConfig[]>([]);
  widgets = input<Widget[]>([]);

  protected _allLoaded = signal(false);
  protected _loadedWidgetsCount = signal(0);

  ngOnInit() {
    if (this.configs().length === 0) {
      return;
    }

    this.configs().forEach(config => {
      this._skeletonMap.set(config.type, config.skeleton);
    });
    this.configs().forEach(async (config, index: number) => {
      this._componentsMap.set(config.type, config.component());
    });
  }

  protected getSkeletonComponent(type: string): any {
    return this._skeletonMap.get(type);
  }

  protected getWidgetComponent(type: string) {
    return this._componentsMap.get(type);
  }

  markWidgetAsLoaded(id: any) {
    this._loadedWidgetsCount.set(this._loadedWidgetsCount() + 1);
    this._allLoaded.set(this._loadedWidgetsCount() === this.widgets().length);
  }
}
