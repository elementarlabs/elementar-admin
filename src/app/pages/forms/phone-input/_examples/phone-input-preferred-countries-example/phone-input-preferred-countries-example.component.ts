import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { PhoneInputComponent, phoneValidator } from '@elementar-ui/components';

@Component({
  selector: 'app-phone-input-preferred-countries-example',
  imports: [
    FormsModule,
    MatError,
    MatFormField,
    MatLabel,
    PhoneInputComponent,
    ReactiveFormsModule
  ],
  templateUrl: './phone-input-preferred-countries-example.component.html',
  styleUrl: './phone-input-preferred-countries-example.component.scss'
})
export class PhoneInputPreferredCountriesExampleComponent {
  private _fb = inject(FormBuilder);
  form: FormGroup = this._fb.group({
    phone: [{ value: '+15165867279', disabled: false }, [phoneValidator]]
  });
}
