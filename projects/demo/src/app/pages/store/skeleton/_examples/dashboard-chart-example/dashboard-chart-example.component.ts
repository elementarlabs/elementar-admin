import { Component } from '@angular/core';
import {
  DashboardChartWidgetSkeletonComponent
} from '@elementar/store/skeleton';

@Component({
  selector: 'app-dashboard-chart-example',
  standalone: true,
  imports: [
    DashboardChartWidgetSkeletonComponent
  ],
  templateUrl: './dashboard-chart-example.component.html',
  styleUrl: './dashboard-chart-example.component.scss'
})
export class DashboardChartExampleComponent {

}
