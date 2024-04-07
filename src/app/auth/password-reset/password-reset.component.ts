import { Component, inject } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { EmrPinInputModule } from '@components/pin-input/pin-input.module';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-password-reset',
  standalone: true,
  imports: [
    FormsModule,
    MatButton,
    MatFormField,
    MatInput,
    MatLabel,
    RouterLink,
    ReactiveFormsModule,
    EmrPinInputModule,
    MatIcon
  ],
  templateUrl: './password-reset.component.html',
  styleUrl: './password-reset.component.scss'
})
export class PasswordResetComponent {
  private _router = inject(Router);
  pin = new FormControl('', [Validators.required]);

  resendCode(): void {

  }

  continue() {
    this._router.navigateByUrl('/auth/set-new-password');
  }
}
