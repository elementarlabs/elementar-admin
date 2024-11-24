import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { PhoneInputComponent, phoneValidator } from '@elementar/components/phone-input';
import { HDividerComponent } from '@elementar/components/divider';
import { PasswordStrengthComponent } from '@elementar/components/password-strength';

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
    HDividerComponent,
    PhoneInputComponent,
    PasswordStrengthComponent
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
