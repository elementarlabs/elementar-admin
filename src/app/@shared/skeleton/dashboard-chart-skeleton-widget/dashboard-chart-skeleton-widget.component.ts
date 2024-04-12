import { Component } from '@angular/core';
import { EmrSkeletonModule } from '@elementar/components';

@Component({
  selector: 'app-dashboard-chart-skeleton-widget',
  standalone: true,
  imports: [
    EmrSkeletonModule
  ],
  templateUrl: './dashboard-chart-skeleton-widget.component.html',
  styleUrl: './dashboard-chart-skeleton-widget.component.scss'
})
export class DashboardChartSkeletonWidgetComponent {

}
