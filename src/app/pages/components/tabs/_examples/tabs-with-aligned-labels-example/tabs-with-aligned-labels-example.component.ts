import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDivider } from '@angular/material/divider';

@Component({
    selector: 'app-tabs-with-aligned-labels-example',
    imports: [
        MatTabsModule,
        MatDivider
    ],
    templateUrl: './tabs-with-aligned-labels-example.component.html',
    styleUrl: './tabs-with-aligned-labels-example.component.scss'
})
export class TabsWithAlignedLabelsExampleComponent {

}
