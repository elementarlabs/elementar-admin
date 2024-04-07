import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatHint, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { PasswordStrengthModule } from '@components/password-strength/password-strength.module';

@Component({
  selector: 'app-basic-password-strength-example',
  standalone: true,
  imports: [
    FormsModule,
    MatFormField,
    MatInput,
    MatLabel,
    PasswordStrengthModule,
    ReactiveFormsModule,
    MatHint
  ],
  templateUrl: './basic-password-strength-example.component.html',
  styleUrl: './basic-password-strength-example.component.scss'
})
export class BasicPasswordStrengthExampleComponent {
  password = new FormControl('');
}
