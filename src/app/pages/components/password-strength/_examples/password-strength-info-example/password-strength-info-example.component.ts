import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatHint, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { PasswordStrengthModule } from '@elementar/components';

@Component({
  selector: 'app-password-strength-info-example',
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
  templateUrl: './password-strength-info-example.component.html',
  styleUrl: './password-strength-info-example.component.scss'
})
export class PasswordStrengthInfoExampleComponent {
  password = new FormControl('');
}
