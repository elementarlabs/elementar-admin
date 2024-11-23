import { Component } from '@angular/core';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { EmrNumberInputModule } from '@elementar/components/number-input';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-number-input-custom-controls-example',
  imports: [
    MatFormField,
    EmrNumberInputModule,
    MatIcon,
    MatLabel
  ],
  templateUrl: './number-input-custom-controls-example.component.html',
  styleUrl: './number-input-custom-controls-example.component.scss'
})
export class NumberInputCustomControlsExampleComponent {

}
