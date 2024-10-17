import { Component } from '@angular/core';
import { EmrSkeletonModule } from '@elementar/components/skeleton';

@Component({
  selector: 'emr-dashboard-chart-widget-skeleton',
  standalone: true,
  imports: [
    EmrSkeletonModule
  ],
  templateUrl: './dashboard-chart-widget-skeleton.component.html',
  styleUrl: './dashboard-chart-widget-skeleton.component.css'
})
export class DashboardChartWidgetSkeletonComponent {

}
