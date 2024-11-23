import { Component } from '@angular/core';
import { EmrSkeletonModule } from '@elementar/components/skeleton';

@Component({
    selector: 'emr-dashboard-stats-widget-skeleton',
    imports: [
        EmrSkeletonModule
    ],
    templateUrl: './dashboard-stats-widget-skeleton.component.html',
    styleUrl: './dashboard-stats-widget-skeleton.component.css'
})
export class DashboardStatsWidgetSkeletonComponent {

}
