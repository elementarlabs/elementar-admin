import { Component } from '@angular/core';
import { MatList, MatListItem, MatListItemLine, MatListItemTitle } from '@angular/material/list';

@Component({
  selector: 'app-list-variants-example',
  standalone: true,
  imports: [
    MatList,
    MatListItemTitle,
    MatListItemLine,
    MatListItem
  ],
  templateUrl: './list-variants-example.component.html',
  styleUrl: './list-variants-example.component.scss'
})
export class ListVariantsExampleComponent {

}
