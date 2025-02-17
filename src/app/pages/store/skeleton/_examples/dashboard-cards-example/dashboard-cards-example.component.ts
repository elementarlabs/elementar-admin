import { Component } from '@angular/core';
import { DashboardCardsSkeletonComponent } from '@store/skeleton';

@Component({
    selector: 'app-dashboard-cards-example',
    imports: [
        DashboardCardsSkeletonComponent
    ],
    templateUrl: './dashboard-cards-example.component.html',
    styleUrl: './dashboard-cards-example.component.scss'
})
export class DashboardCardsExampleComponent {

}
