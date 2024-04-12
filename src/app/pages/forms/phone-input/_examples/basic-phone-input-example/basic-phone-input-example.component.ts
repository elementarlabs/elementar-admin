import { Component, inject } from '@angular/core';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { EmrPhoneInputModule } from '@elementar/components';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { phoneValidator } from '@elementar/components';

@Component({
  selector: 'app-basic-phone-input-example',
  standalone: true,
  imports: [
    MatFormField,
    MatLabel,
    MatError,
    EmrPhoneInputModule,
    ReactiveFormsModule
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
