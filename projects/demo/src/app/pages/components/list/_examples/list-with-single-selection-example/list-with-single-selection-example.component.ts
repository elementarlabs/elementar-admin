import { Component } from '@angular/core';
import { MatListOption, MatSelectionList } from '@angular/material/list';
import { MatDivider } from '@angular/material/divider';

@Component({
    selector: 'app-list-with-single-selection-example',
    imports: [
        MatListOption,
        MatSelectionList,
        MatDivider
    ],
    templateUrl: './list-with-single-selection-example.component.html',
    styleUrl: './list-with-single-selection-example.component.scss'
})
export class ListWithSingleSelectionExampleComponent {
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
}
