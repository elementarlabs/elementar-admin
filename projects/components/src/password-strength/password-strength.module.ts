import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { PasswordStrengthComponent } from './password-strength/password-strength.component';
import {
  PasswordStrengthInfoComponent
} from './password-strength-info/password-strength-info.component';
import {
  PassToggleVisibilityComponent
} from './pass-toggle-visibility/pass-toggle-visibility.component';

// validator
export { RegExpValidator } from './validator/regexp.class';

@NgModule({
  declarations: [
    PasswordStrengthComponent,
    PasswordStrengthInfoComponent,
    PassToggleVisibilityComponent
  ],
  imports: [
    CommonModule,
    MatProgressBarModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatRippleModule
  ],
  exports: [
    PasswordStrengthComponent,
    PasswordStrengthInfoComponent,
    PassToggleVisibilityComponent
  ]
})
export class PasswordStrengthModule {
}
