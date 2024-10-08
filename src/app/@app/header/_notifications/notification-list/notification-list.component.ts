import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { MatRipple } from '@angular/material/core';
import { NgTemplateOutlet } from '@angular/common';
import { EmrSkeletonModule } from '@elementar/components/skeleton';
import { HDividerComponent } from '@elementar/components/divider';
import {
  MentionedInCommentNotification
} from '@app/header/_notifications/notification-types/mentioned-in-comment/mentioned-in-comment.notification';
import {
  InviteToEditFilesInFolderNotification
} from '@app/header/_notifications/notification-types/invite-to-edit-files-in-folder/invite-to-edit-files-in-folder.notification';
import { Notification } from '@elementar/components/notifications';

@Component({
  selector: 'app-header-notification-list',
  standalone: true,
  imports: [
    RouterLink,
    MatIcon,
    MatRipple,
    EmrSkeletonModule,
    NgTemplateOutlet,
    HDividerComponent,
    MentionedInCommentNotification,
    InviteToEditFilesInFolderNotification
  ],
  templateUrl: './notification-list.component.html',
  styleUrl: './notification-list.component.scss'
})
export class NotificationListComponent {
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
      type: 'mentioned-in-comment',
      createdAt: '1 hour ago'
    },
    {
      actor: {
        id: 3,
        name: 'Johnny Gladden',
        username: 'johnny.gladden',
        avatarUrl: 'https://avatar.iran.liara.run/public'
      },
      notifier: {
        id: 4,
        name: 'Angela Naylor',
        username: 'angela.naylor',
        avatarUrl: 'https://avatar.iran.liara.run/public'
      },
      payload: {
        folderName: 'My New Project'
      },
      type: 'invite-to-edit-files-in-folder',
      createdAt: '2 hours ago'
    }
  ];
}
