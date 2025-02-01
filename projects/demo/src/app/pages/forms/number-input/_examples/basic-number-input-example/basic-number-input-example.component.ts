import { Component } from '@angular/core';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { NumberInputComponent } from '@elementar-ui/components/number-input';

@Component({
  selector: 'app-basic-number-input-example',
  imports: [
    MatFormField,
    MatLabel,
    NumberInputComponent
  ],
  templateUrl: './basic-number-input-example.component.html',
  styleUrl: './basic-number-input-example.component.scss'
})
export class BasicNumberInputExampleComponent {

}
