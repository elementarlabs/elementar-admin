import { Component } from '@angular/core';
import { MatList, MatListItem } from '@angular/material/list';

@Component({
    selector: 'app-basic-list-example',
    imports: [
        MatList,
        MatListItem
    ],
    templateUrl: './basic-list-example.component.html',
    styleUrl: './basic-list-example.component.scss'
})
export class BasicListExampleComponent {

}
