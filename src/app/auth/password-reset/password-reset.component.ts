import { Component, inject } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';

import { MatIcon } from '@angular/material/icon';
import { PinInputComponent } from '../../../../projects/components/src/pin-input/pin-input/pin-input.component';

@Component({
  selector: 'app-password-reset',
  imports: [
    FormsModule,
    MatButton,
    RouterLink,
    ReactiveFormsModule,
    PinInputComponent,
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
