import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatHint, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { PasswordStrengthComponent, PasswordStrengthInfoComponent } from '@elementar-ui/components';

@Component({
  selector: 'app-password-strength-info-example',
  imports: [
    FormsModule,
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule,
    MatHint,
    PasswordStrengthInfoComponent,
    PasswordStrengthComponent
  ],
  templateUrl: './password-strength-info-example.component.html',
  styleUrl: './password-strength-info-example.component.scss'
})
export class PasswordStrengthInfoExampleComponent {
  password = new FormControl('');
}
