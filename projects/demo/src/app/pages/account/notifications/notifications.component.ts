import { Component } from '@angular/core';
import { PageComponent } from '@demo/meta/page/page.component';
import { PageContentDirective } from '@demo/meta/page/page-content.directive';
import {
  Notification, NotificationDefDirective,
  NotificationListComponent
} from '@elementar/components/notifications';
import {
  InviteToEditFilesInFolderNotification
} from '../../../@notifications/invite-to-edit-files-in-folder/invite-to-edit-files-in-folder.notification';
import { MatCellDef } from '@angular/material/table';
import { NgTemplateOutlet } from '@angular/common';
import { EmrSkeletonModule } from '@elementar/components/skeleton';
import { DicebearComponent } from '@elementar/components/avatar';
import {
  MentionedInCommentNotification
} from '../../../@notifications/mentioned-in-comment/mentioned-in-comment.notification';

@Component({
  standalone: true,
  imports: [
    PageComponent,
    PageContentDirective,
    NotificationListComponent,
    InviteToEditFilesInFolderNotification,
    MatCellDef,
    NgTemplateOutlet,
    EmrSkeletonModule,
    DicebearComponent,
    NotificationDefDirective,
    MentionedInCommentNotification
  ],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.scss'
})
export class NotificationsComponent {
  notifications: Notification[] = [
    {
      actor: {
        key: 1,
        name: 'Justin Hansen',
        username: 'justin.hansen',
        avatarUrl: 'https://avatar.iran.liara.run/public'
      },
      notifier: {
        key: 2,
        name: 'Elma Johnson',
        username: 'elma.johnson',
        avatarUrl: 'https://avatar.iran.liara.run/public'
      },
      entity: {
        content: 'what did you say?'
      },
      type: 'mentionedInComment',
      createdAt: '1 hour ago'
    },
    {
      actor: {
        key: 1,
        name: 'Johnny Gladden',
        username: 'johnny.gladden',
        avatarUrl: 'https://avatar.iran.liara.run/public'
      },
      notifier: {
        key: 2,
        name: 'Angela Naylor',
        username: 'angela.naylor',
        avatarUrl: 'https://avatar.iran.liara.run/public'
      },
      entity: {
        content: {
          folderName: 'My New Project'
        }
      },
      type: 'inviteToEditFilesInFolder',
      createdAt: '2 hours ago'
    }
  ];
}
