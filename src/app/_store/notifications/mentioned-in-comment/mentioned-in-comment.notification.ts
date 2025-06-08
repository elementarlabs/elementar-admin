import { Component, input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { DicebearComponent } from '@elementar-ui/components/avatar';
import {
  Notification,
  NotificationActorComponent,
  NotificationAvatarDirective,
  NotificationComponent,
  NotificationContentComponent,
  NotificationMessageComponent,
  NotificationTimeComponent
} from '@elementar-ui/components/notifications';

@Component({
  selector: 'emr-mentioned-in-comment',
  imports: [
    MatIcon,
    DicebearComponent,
    NotificationActorComponent,
    NotificationAvatarDirective,
    NotificationComponent,
    NotificationContentComponent,
    NotificationMessageComponent,
    NotificationTimeComponent
  ],
  templateUrl: './mentioned-in-comment.notification.html',
  styleUrl: './mentioned-in-comment.notification.scss'
})
export class MentionedInCommentNotification {
  notification = input.required<Notification>();
}
