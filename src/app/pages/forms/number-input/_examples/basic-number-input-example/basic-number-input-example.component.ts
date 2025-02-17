import { Component, model } from '@angular/core';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { NumberInputComponent } from '@elementar-ui/components';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-basic-number-input-example',
  imports: [
    MatFormField,
    MatLabel,
    NumberInputComponent,
    FormsModule
  ],
  templateUrl: './basic-number-input-example.component.html',
  styleUrl: './basic-number-input-example.component.scss'
})
export class BasicNumberInputExampleComponent {
  value = model();
}
