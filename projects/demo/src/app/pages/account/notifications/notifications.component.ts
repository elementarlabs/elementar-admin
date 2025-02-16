import { Component } from '@angular/core';
import { PageComponent } from '@demo/meta/page/page.component';
import { PageContentDirective } from '@demo/meta/page/page-content.directive';
import {
  Notification, NotificationControlsDefDirective, NotificationDefDirective,
  NotificationListComponent, NotificationPropsDirective,
} from '@elementar-ui/components';
import { MatIcon } from '@angular/material/icon';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { MatIconButton } from '@angular/material/button';
import { InviteToEditFilesInFolderNotification, MentionedInCommentNotification } from '@elementar/store/notifications';

@Component({
  imports: [
    PageComponent,
    PageContentDirective,
    NotificationListComponent,
    NotificationDefDirective,
    InviteToEditFilesInFolderNotification,
    MentionedInCommentNotification,
    NotificationPropsDirective,
    MatIcon,
    NotificationControlsDefDirective,
    MatMenu,
    MatMenuItem,
    MatIconButton,
    MatMenuTrigger
  ],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.scss'
})
export class NotificationsComponent {
  notifications: Notification[] = [
    {
      actor: {
        id: 1,
        name: 'Justin Hansen',
        username: 'justin.hansen',
        avatarUrl: 'assets/avatars/6.svg'
      },
      notifier: {
        id: 2,
        name: 'Elma Johnson',
        username: 'elma.johnson',
        avatarUrl: 'assets/avatars/4.svg'
      },
      payload: {
        content: 'what did you say?'
      },
      isNew: true,
      type: 'mentionedInComment',
      createdAt: '1 hour ago'
    },
    {
      actor: {
        id: 3,
        name: 'Johnny Gladden',
        username: 'johnny.gladden',
        avatarUrl: 'assets/avatars/3.svg'
      },
      notifier: {
        id: 4,
        name: 'Angela Naylor',
        username: 'angela.naylor',
        avatarUrl: 'assets/avatars/1.svg'
      },
      payload: {
        folderName: 'My New Project'
      },
      isNew: true,
      type: 'inviteToEditFilesInFolder',
      createdAt: '2 hours ago'
    },
    {
      actor: {
        id: 1,
        name: 'Justin Hansen',
        username: 'justin.hansen',
        avatarUrl: 'assets/avatars/7.svg'
      },
      notifier: {
        id: 2,
        name: 'Elma Johnson',
        username: 'elma.johnson',
        avatarUrl: 'assets/avatars/8.svg'
      },
      payload: {
        content: 'what did you say?'
      },
      type: 'mentionedInComment',
      createdAt: '1 hour ago'
    },
  ];
}
