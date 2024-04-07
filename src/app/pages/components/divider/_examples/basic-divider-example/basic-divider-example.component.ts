import { Component } from '@angular/core';
import { MatList, MatListItem } from '@angular/material/list';
import { MatDivider } from '@angular/material/divider';

@Component({
  selector: 'app-basic-divider-example',
  standalone: true,
  imports: [
    MatList,
    MatDivider,
    MatListItem
  ],
  templateUrl: './basic-divider-example.component.html',
  styleUrl: './basic-divider-example.component.scss'
})
export class BasicDividerExampleComponent {

}
