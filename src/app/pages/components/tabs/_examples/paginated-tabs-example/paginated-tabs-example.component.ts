import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
    selector: 'app-paginated-tabs-example',
    imports: [
        MatTabsModule
    ],
    templateUrl: './paginated-tabs-example.component.html',
    styleUrl: './paginated-tabs-example.component.scss'
})
export class PaginatedTabsExampleComponent {
  lotsOfTabs = new Array(30).fill(0).map((_, index) => `Tab ${index}`);
}
