import { Component } from '@angular/core';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NumberInputComponent } from '@elementar-ui/components/number-input';

@Component({
  selector: 'app-number-input-min-max-example',
  imports: [
    MatFormField,
    FormsModule,
    ReactiveFormsModule,
    MatLabel,
    NumberInputComponent
  ],
  templateUrl: './number-input-min-max-example.component.html',
  styleUrl: './number-input-min-max-example.component.scss'
})
export class NumberInputMinMaxExampleComponent {
  value = 3;
  control = new FormControl(3, {
    validators: [Validators.min(2), Validators.max(5)]
  });
}
