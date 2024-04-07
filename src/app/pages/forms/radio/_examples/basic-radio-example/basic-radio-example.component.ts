import { Component } from '@angular/core';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';

@Component({
  selector: 'app-basic-radio-example',
  standalone: true,
  imports: [
    MatRadioButton,
    MatRadioGroup
  ],
  templateUrl: './basic-radio-example.component.html',
  styleUrl: './basic-radio-example.component.scss'
})
export class BasicRadioExampleComponent {

}
