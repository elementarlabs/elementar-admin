import { Component, inject } from '@angular/core';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PhoneInputComponent, phoneValidator } from '@elementar-ui/components/phone-input';

@Component({
  selector: 'app-basic-phone-input-example',
  imports: [
    MatFormField,
    MatLabel,
    MatError,
    ReactiveFormsModule,
    PhoneInputComponent
  ],
  templateUrl: './basic-phone-input-example.component.html',
  styleUrl: './basic-phone-input-example.component.scss'
})
export class BasicPhoneInputExampleComponent {
  private _fb = inject(FormBuilder);
  form: FormGroup = this._fb.group({
    phone: ['+15165867279', [phoneValidator]]
  });
}
