import { Component } from '@angular/core';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatTooltip } from '@angular/material/tooltip';
import { IconComponent } from '@elementar/components';

@Component({
  standalone: true,
  imports: [
    MatButton,
    MatIcon,
    MatIconButton,
    MatTooltip,
    IconComponent
  ],
  templateUrl: './talent-profile.component.html',
  styleUrl: './talent-profile.component.scss'
})
export class TalentProfileComponent {
  followed = false;

  follow(): void {
    this.followed = true;
  }

  unfollow(): void {
    this.followed = false;
  }
}
