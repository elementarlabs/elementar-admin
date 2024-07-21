import { Component, Input } from '@angular/core';
import { Notification } from '@app/header/_notifications/types';
import { MatIcon } from '@angular/material/icon';
import { MatRipple } from '@angular/material/core';
import { RouterLink } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { EmrAvatarModule } from '@elementar/components/avatar';
import { IconComponent } from '@elementar/components/icon';

@Component({
  selector: 'app-invite-to-edit-files-in-folder',
  standalone: true,
  imports: [
    EmrAvatarModule,
    MatIcon,
    MatRipple,
    RouterLink,
    MatButton,
    IconComponent
  ],
  templateUrl: './invite-to-edit-files-in-folder.notification.html',
  styleUrl: './invite-to-edit-files-in-folder.notification.scss'
})
export class InviteToEditFilesInFolderNotification {
  @Input()
  notification: Notification;
}
