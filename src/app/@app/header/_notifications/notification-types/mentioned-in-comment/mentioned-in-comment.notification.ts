import { Component, Input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatRipple } from '@angular/material/core';
import { RouterLink } from '@angular/router';
import { Notification } from '@app/header/_notifications/types';
import { IconComponent } from '@elementar/components/icon';
import { AvatarComponent } from '@elementar/components/avatar';

@Component({
  selector: 'app-mentioned-in-comment',
  standalone: true,
  imports: [
    MatIcon,
    MatRipple,
    RouterLink,
    IconComponent,
    AvatarComponent
  ],
  templateUrl: './mentioned-in-comment.notification.html',
  styleUrl: './mentioned-in-comment.notification.scss'
})
export class MentionedInCommentNotification {
  @Input()
  notification: Notification;
}
