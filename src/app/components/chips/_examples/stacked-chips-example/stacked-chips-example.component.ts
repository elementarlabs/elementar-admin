import { Component } from '@angular/core';
import { MatChipListbox, MatChipOption } from '@angular/material/chips';

@Component({
  selector: 'app-stacked-chips-example',
  imports: [
    MatChipListbox,
    MatChipOption
  ],
  templateUrl: './stacked-chips-example.component.html',
  styleUrl: './stacked-chips-example.component.scss'
})
export class StackedChipsExampleComponent {
  readonly bestBoys: string[] = [
    'Samoyed', 'Akita Inu', 'Alaskan Malamute', 'Siberian Husky'
  ];
}
