import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatLabel, MatSuffix } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { PasswordStrengthModule } from '@components/password-strength/password-strength.module';

@Component({
  selector: 'app-password-toggle-visibility-example',
  standalone: true,
  imports: [
    FormsModule,
    MatFormField,
    MatInput,
    MatLabel,
    PasswordStrengthModule,
    ReactiveFormsModule,
    MatSuffix
  ],
  templateUrl: './password-toggle-visibility-example.component.html',
  styleUrl: './password-toggle-visibility-example.component.scss'
})
export class PasswordToggleVisibilityExampleComponent {
  password = new FormControl('');
}
