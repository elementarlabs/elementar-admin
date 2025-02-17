import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { HorizontalDividerComponent } from '@elementar-ui/components';

@Component({
  imports: [
    MatButton,
    MatIcon,
    MatSlideToggle,
    FormsModule,
    HorizontalDividerComponent
  ],
  templateUrl: './security.component.html',
  styleUrl: './security.component.scss'
})
export class SecurityComponent {
  securityProfile = {
    email: 'pavel.salauyou@gmail.com',
    isEmailVerified: false,
    mfaConfigured: false,
    mfaEnabled: false
  };

  setup2stepVerification() {
    this.securityProfile.mfaConfigured = true;
    this.securityProfile.mfaEnabled = true;
  }
}
