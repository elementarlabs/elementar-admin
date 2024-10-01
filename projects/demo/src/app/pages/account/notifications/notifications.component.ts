import { Component } from '@angular/core';
import { PageComponent } from '@demo/meta/page/page.component';
import { PageContentDirective } from '@demo/meta/page/page-content.directive';
import {
  Notification,
  NotificationComponent,
  NotificationListComponent
} from '@elementar/components/notifications';
import {
  InviteToEditFilesInFolderNotification
} from '../../../@notifications/invite-to-edit-files-in-folder/invite-to-edit-files-in-folder.notification';
import { MatCellDef } from '@angular/material/table';
import {
  MentionedInCommentNotification
} from '@demo/app/header/_notifications/notification-types/mentioned-in-comment/mentioned-in-comment.notification';
import { NgTemplateOutlet } from '@angular/common';
import { EmrSkeletonModule } from '@elementar/components/skeleton';

@Component({
  standalone: true,
  imports: [
    PageComponent,
    PageContentDirective,
    NotificationComponent,
    NotificationListComponent,
    InviteToEditFilesInFolderNotification,
    MatCellDef,
    MentionedInCommentNotification,
    NgTemplateOutlet,
    EmrSkeletonModule
  ],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.scss'
})
export class NotificationsComponent {
  notifications: Notification[] = [
    {
      actor: {
        name: 'Justin Hansen',
        username: 'justin.hansen',
        avatarUrl: 'https://avatar.iran.liara.run/public'
      },
      notifier: {
        name: 'Elma Johnson',
        username: 'elma.johnson',
        avatarUrl: 'https://avatar.iran.liara.run/public'
      },
      entity: {
        content: 'what did you say?'
      },
      actionIconName: 'comment',
      type: 'mentioned-in-comment',
      createdAt: '1 hour ago'
    },
    {
      actor: {
        name: 'Johnny Gladden',
        username: 'johnny.gladden',
        avatarUrl: 'https://avatar.iran.liara.run/public'
      },
      notifier: {
        name: 'Angela Naylor',
        username: 'angela.naylor',
        avatarUrl: 'https://avatar.iran.liara.run/public'
      },
      actionIconName: 'folder',
      entity: {
        content: {
          folderName: 'My New Project'
        }
      },
      type: 'invite-to-edit-files-in-folder',
      createdAt: '2 hours ago'
    }
  ];
}
