import { Component } from '@angular/core';
import { MatListOption, MatSelectionList } from '@angular/material/list';
import { MatDivider } from '@angular/material/divider';

@Component({
    selector: 'app-list-with-selection-example',
    imports: [
        MatListOption,
        MatSelectionList,
        MatDivider
    ],
    templateUrl: './list-with-selection-example.component.html',
    styleUrl: './list-with-selection-example.component.scss'
})
export class ListWithSelectionExampleComponent {
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
}
