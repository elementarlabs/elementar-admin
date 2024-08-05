import { Component } from '@angular/core';
import { MatChipListbox, MatChipOption } from '@angular/material/chips';

@Component({
  selector: 'app-basic-chips-example',
  standalone: true,
  imports: [
    MatChipListbox,
    MatChipOption
  ],
  templateUrl: './basic-chips-example.component.html',
  styleUrl: './basic-chips-example.component.scss'
})
export class BasicChipsExampleComponent {

}
