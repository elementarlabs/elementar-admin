import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatLabel, MatSuffix } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { PasswordStrengthModule } from '@elementar/components/password-strength';

@Component({
    selector: 'app-password-toggle-visibility-example',
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
