import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { RouterLink } from '@angular/router';

import { phoneValidator } from '@elementar/components/phone-input';
import { HDividerComponent } from '@elementar/components/divider';
import { PasswordStrengthComponent } from '../../../../projects/components/src/password-strength/password-strength/password-strength.component';
import { PhoneInputComponent } from '../../../../projects/components/src/phone-input/phone-input/phone-input.component';

@Component({
  selector: 'app-create-account',
  imports: [
    FormsModule,
    MatButton,
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule,
    RouterLink,
    PasswordStrengthComponent,
    PhoneInputComponent,
    HDividerComponent
],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.scss'
})
export class CreateAccountComponent {
  private _formBuilder = inject(FormBuilder);

  form = this._formBuilder.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    phone: ['', [Validators.required, phoneValidator]]
  });

  get passwordValue(): string {
    return this.form.get('password')?.value || '';
  }
}
