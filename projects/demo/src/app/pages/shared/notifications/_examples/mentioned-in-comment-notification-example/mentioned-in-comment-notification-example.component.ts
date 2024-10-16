import { Component } from '@angular/core';
import { InviteToEditFilesInFolderNotification, MentionedInCommentNotification } from '@elementar/shared/notifications';
import { Notification, NotificationDefDirective, NotificationListComponent } from '@elementar/components/notifications';

@Component({
  selector: 'app-mentioned-in-comment-notification-example',
  standalone: true,
  imports: [
    InviteToEditFilesInFolderNotification,
    NotificationDefDirective,
    NotificationListComponent,
    MentionedInCommentNotification
  ],
  templateUrl: './mentioned-in-comment-notification-example.component.html',
  styleUrl: './mentioned-in-comment-notification-example.component.scss'
})
export class MentionedInCommentNotificationExampleComponent {
  notifications: Notification[] = [
    {
      actor: {
        id: 1,
        name: 'Justin Hansen',
        username: 'justin.hansen',
        avatarUrl: 'https://avatar.iran.liara.run/public'
      },
      notifier: {
        id: 2,
        name: 'Elma Johnson',
        username: 'elma.johnson',
        avatarUrl: 'https://avatar.iran.liara.run/public'
      },
      payload: {
        content: 'what did you say?'
      },
      type: 'mentionedInComment',
      createdAt: '1 hour ago'
    }
  ];
}
