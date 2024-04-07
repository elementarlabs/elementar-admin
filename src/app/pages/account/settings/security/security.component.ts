import { Component } from '@angular/core';
import { EmrAvatarModule } from '@components/avatar';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { EmrDividerModule } from '@components/divider/divider.module';

@Component({
  standalone: true,
  imports: [
    EmrAvatarModule,
    MatButton,
    MatIcon,
    MatSlideToggle,
    FormsModule,
    EmrDividerModule
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
