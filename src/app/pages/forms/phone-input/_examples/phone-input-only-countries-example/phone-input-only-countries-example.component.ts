import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { PhoneInputComponent, phoneValidator } from '@elementar-ui/components/phone-input';

@Component({
  selector: 'app-phone-input-only-countries-example',
  imports: [
    FormsModule,
    MatError,
    MatFormField,
    MatLabel,
    PhoneInputComponent,
    ReactiveFormsModule
  ],
  templateUrl: './phone-input-only-countries-example.component.html',
  styleUrl: './phone-input-only-countries-example.component.scss'
})
export class PhoneInputOnlyCountriesExampleComponent {
  private _fb = inject(FormBuilder);
  form: FormGroup = this._fb.group({
    phone: ['+447874482198', [phoneValidator]]
  });
}
