import { Component, input, numberAttribute } from '@angular/core';
import { EmrSkeletonModule } from '@components/skeleton';

@Component({
  selector: 'app-dashboard-cards-skeleton-widget',
  standalone: true,
  imports: [
    EmrSkeletonModule
  ],
  templateUrl: './dashboard-cards-skeleton-widget.component.html',
  styleUrl: './dashboard-cards-skeleton-widget.component.scss'
})
export class DashboardCardsSkeletonWidgetComponent {
  count = input(2, {
    transform: numberAttribute
  });
}
