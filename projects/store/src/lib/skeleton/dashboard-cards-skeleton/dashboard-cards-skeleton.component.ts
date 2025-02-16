import { Component, input, numberAttribute } from '@angular/core';
import { SkeletonBlockComponent, SkeletonComponent, SkeletonLineComponent } from '@elementar-ui/components';

@Component({
  selector: 'emr-dashboard-cards-skeleton',
  imports: [
    SkeletonBlockComponent,
    SkeletonLineComponent,
    SkeletonComponent
  ],
  templateUrl: './dashboard-cards-skeleton.component.html',
  styleUrl: './dashboard-cards-skeleton.component.css'
})
export class DashboardCardsSkeletonComponent {
  count = input(2, {
    transform: numberAttribute
  });
}
