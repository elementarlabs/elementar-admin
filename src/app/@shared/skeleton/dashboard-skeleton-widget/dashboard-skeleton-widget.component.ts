import { Component } from '@angular/core';
import { EmrSkeletonModule } from '@elementar/components';

@Component({
  selector: 'app-dashboard-skeleton-widget',
  standalone: true,
  imports: [
    EmrSkeletonModule
  ],
  templateUrl: './dashboard-skeleton-widget.component.html',
  styleUrl: './dashboard-skeleton-widget.component.scss'
})
export class DashboardSkeletonWidgetComponent {

}
