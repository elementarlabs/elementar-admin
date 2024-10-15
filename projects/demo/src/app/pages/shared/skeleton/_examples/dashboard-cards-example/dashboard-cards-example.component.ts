import { Component } from '@angular/core';
import { DashboardCardsSkeletonComponent } from '@elementar/shared/skeleton';

@Component({
  selector: 'app-dashboard-cards-example',
  standalone: true,
  imports: [
    DashboardCardsSkeletonComponent
  ],
  templateUrl: './dashboard-cards-example.component.html',
  styleUrl: './dashboard-cards-example.component.scss'
})
export class DashboardCardsExampleComponent {

}
