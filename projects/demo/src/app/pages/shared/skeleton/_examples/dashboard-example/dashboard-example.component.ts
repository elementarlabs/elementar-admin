import { Component } from '@angular/core';
import { DashboardStatsWidgetSkeletonComponent } from '@elementar/shared/skeleton';

@Component({
  selector: 'app-dashboard-example',
  standalone: true,
  imports: [
    DashboardStatsWidgetSkeletonComponent
  ],
  templateUrl: './dashboard-example.component.html',
  styleUrl: './dashboard-example.component.scss'
})
export class DashboardExampleComponent {

}
