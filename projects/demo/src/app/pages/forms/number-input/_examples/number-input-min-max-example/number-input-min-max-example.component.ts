import { Component, inject } from '@angular/core';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
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
  private _formBuilder = inject(FormBuilder);
  form = this._formBuilder.group({
    control: [3, [Validators.min(2), Validators.max(5)]]
  });
}
