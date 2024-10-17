import { Component, input, numberAttribute } from '@angular/core';
import { EmrSkeletonModule } from '@elementar/components/skeleton';

@Component({
  selector: 'emr-dashboard-cards-skeleton',
  standalone: true,
  imports: [
    EmrSkeletonModule
  ],
  templateUrl: './dashboard-cards-skeleton.component.html',
  styleUrl: './dashboard-cards-skeleton.component.css'
})
export class DashboardCardsSkeletonComponent {
  count = input(2, {
    transform: numberAttribute
  });
}
