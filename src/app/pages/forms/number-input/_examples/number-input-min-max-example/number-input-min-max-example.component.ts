import { Component } from '@angular/core';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { EmrNumberInputModule } from '@components/number-input/number-input.module';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-number-input-min-max-example',
  standalone: true,
  imports: [
    MatFormField,
    EmrNumberInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatLabel
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
