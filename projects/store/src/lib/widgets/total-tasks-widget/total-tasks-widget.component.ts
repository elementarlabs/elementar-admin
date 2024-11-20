import { Component, inject, input, OnInit } from '@angular/core';
import {
  MchartLineComponent,
  MchartTooltipBodyComponent,
  MchartTooltipComponent, MchartTooltipTitleComponent
} from '@elementar/components/micro-chart';
import { DASHBOARD, DashboardWidgetConfig } from '@elementar/components/dashboard';

@Component({
  selector: 'emr-total-tasks-widget',
  standalone: true,
  templateUrl: './total-tasks-widget.component.html',
  imports: [
    MchartTooltipBodyComponent,
    MchartTooltipComponent,
    MchartTooltipTitleComponent,
    MchartLineComponent
  ],
  styleUrl: './total-tasks-widget.component.scss'
})
export class TotalTasksWidgetComponent implements OnInit {
  data = [47, 54, 38, 24, 65, 37];
  labels = ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'];

  private _dashboard = inject<any>(DASHBOARD, { optional: true });

  widget = input<DashboardWidgetConfig>();

  ngOnInit() {
    if (this._dashboard && this.widget()) {
      this._dashboard.setWidgetLoaded(this.widget()?.id);
    }
  }
}
