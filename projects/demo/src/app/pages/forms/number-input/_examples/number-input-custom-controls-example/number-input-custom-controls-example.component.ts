import { Component } from '@angular/core';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import {
  DecreaseControlDirective,
  IncreaseControlDirective,
  NumberInputComponent
} from '@elementar/components/number-input';

@Component({
  selector: 'app-number-input-custom-controls-example',
  imports: [
    MatFormField,
    MatIcon,
    MatLabel,
    DecreaseControlDirective,
    IncreaseControlDirective,
    NumberInputComponent
  ],
  templateUrl: './number-input-custom-controls-example.component.html',
  styleUrl: './number-input-custom-controls-example.component.scss'
})
export class NumberInputCustomControlsExampleComponent {

}
