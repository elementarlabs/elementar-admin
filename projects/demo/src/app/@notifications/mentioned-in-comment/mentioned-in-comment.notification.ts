import { Component, Input, input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatRipple } from '@angular/material/core';
import { RouterLink } from '@angular/router';
import { IconComponent } from '@elementar/components/icon';
import { DicebearComponent } from '@elementar/components/avatar';
import { Notification } from '@elementar/components/notifications';

@Component({
  selector: 'app-mentioned-in-comment',
  standalone: true,
  imports: [
    MatIcon,
    MatRipple,
    RouterLink,
    IconComponent,
    DicebearComponent
  ],
  templateUrl: './mentioned-in-comment.notification.html',
  styleUrl: './mentioned-in-comment.notification.scss'
})
export class MentionedInCommentNotification {
  notification = input.required<Notification>();
}
