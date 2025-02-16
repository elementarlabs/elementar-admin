import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatLabel, MatSuffix } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { PassToggleVisibilityComponent, PasswordStrengthComponent } from '@elementar-ui/components';

@Component({
  selector: 'app-password-toggle-visibility-example',
  imports: [
    FormsModule,
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule,
    MatSuffix,
    PassToggleVisibilityComponent,
    PasswordStrengthComponent
  ],
  templateUrl: './password-toggle-visibility-example.component.html',
  styleUrl: './password-toggle-visibility-example.component.scss'
})
export class PasswordToggleVisibilityExampleComponent {
  password = new FormControl('');
}
