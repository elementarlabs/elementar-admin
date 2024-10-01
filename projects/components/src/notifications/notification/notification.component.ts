import { Component, input } from '@angular/core';
import { AvatarComponent } from '@elementar/components/avatar';
import { MatIcon } from '@angular/material/icon';
import { MatRipple } from '@angular/material/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'emr-notification',
  exportAs: 'emrNotification',
  standalone: true,
  imports: [
    AvatarComponent,
    MatIcon,
    MatRipple,
    RouterLink
  ],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss',
  host: {
    'class': 'emr-notification',
  }
})
export class NotificationComponent {
  actorAvatarUrl = input<string>();
  actorName = input.required<string>();
  actionIconName = input<string>();
  createdAt = input.required<string>();
}
