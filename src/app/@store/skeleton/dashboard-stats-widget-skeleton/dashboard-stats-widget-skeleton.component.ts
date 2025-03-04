import { Component } from '@angular/core';
import { SkeletonBlockComponent, SkeletonComponent, SkeletonLineComponent } from '@elementar-ui/components/skeleton';

@Component({
  selector: 'emr-dashboard-stats-widget-skeleton',
  imports: [
    SkeletonBlockComponent,
    SkeletonLineComponent,
    SkeletonComponent
  ],
  templateUrl: './dashboard-stats-widget-skeleton.component.html',
  styleUrl: './dashboard-stats-widget-skeleton.component.css'
})
export class DashboardStatsWidgetSkeletonComponent {

}
