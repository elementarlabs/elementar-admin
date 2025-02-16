import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { PasswordStrengthComponent } from '@elementar-ui/components';

@Component({
  selector: 'app-basic-password-strength-example',
  imports: [
    FormsModule,
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule,
    PasswordStrengthComponent
  ],
  templateUrl: './basic-password-strength-example.component.html',
  styleUrl: './basic-password-strength-example.component.scss'
})
export class BasicPasswordStrengthExampleComponent {
  password = new FormControl('');
}
