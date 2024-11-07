import { Component } from '@angular/core';
import { MatInput } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { AvatarPresenceIndicator, DicebearComponent } from '@elementar/components/avatar';
import { DatePipe } from '@angular/common';
import { MatTooltip } from '@angular/material/tooltip';
import {
  CommentEditorBubbleMenuComponent,
  CommentEditorCommandBlockquoteDirective,
  CommentEditorCommandBoldDirective,
  CommentEditorCommandBulletListDirective,
  CommentEditorCommandCodeBlockDirective,
  CommentEditorCommandCodeDirective,
  CommentEditorCommandDirective,
  CommentEditorCommandEditLinkDirective,
  CommentEditorCommandImageDirective,
  CommentEditorCommandItalicDirective,
  CommentEditorCommandLinkDirective,
  CommentEditorCommandOrderedListDirective,
  CommentEditorCommandStrikeDirective,
  CommentEditorCommandToggleToolbarDirective,
  CommentEditorCommandUnsetLinkDirective,
  CommentEditorCommandYoutubeDirective,
  CommentEditorComponent,
  CommentEditorDividerComponent,
  CommentEditorFooterBarComponent,
  CommentEditorToolbarComponent
} from '@elementar/components/comment-editor';

interface MessengerMessage {
  content: string;
  sender: {
    avatarUrl: string;
    name: string;
    id: any;
  };
  createdAt: string | Date;
  presenceIndicator: AvatarPresenceIndicator;
}

interface MessengerThread {
  id: any;
  sender: {
    avatarUrl: string;
    name: string;
    id: any;
    presenceIndicator: AvatarPresenceIndicator;
  };
  title: string;
  lastMessage: string;
  createdAt: string | Date;
  unreadMessagesCount: number;
  messages: MessengerMessage[];
}

@Component({
  selector: 'app-messenger',
  standalone: true,
  imports: [
    MatInput,
    MatIcon,
    MatIconButton,
    DicebearComponent,
    DatePipe,
    MatTooltip,
    CommentEditorComponent,
    CommentEditorFooterBarComponent,
    CommentEditorToolbarComponent,
    CommentEditorBubbleMenuComponent,
    CommentEditorCommandDirective,
    CommentEditorCommandBoldDirective,
    CommentEditorDividerComponent,
    CommentEditorCommandItalicDirective,
    CommentEditorCommandStrikeDirective,
    CommentEditorCommandBulletListDirective,
    CommentEditorCommandOrderedListDirective,
    CommentEditorCommandBlockquoteDirective,
    CommentEditorCommandCodeBlockDirective,
    CommentEditorCommandImageDirective,
    CommentEditorCommandYoutubeDirective,
    CommentEditorCommandEditLinkDirective,
    CommentEditorCommandUnsetLinkDirective,
    CommentEditorCommandLinkDirective,
    CommentEditorCommandCodeDirective,
    CommentEditorCommandToggleToolbarDirective
  ],
  templateUrl: './messenger.component.html',
  styleUrl: './messenger.component.scss'
})
export class MessengerComponent {
  threads: MessengerThread[] = [
    {
      id: 1,
      sender: {
        avatarUrl: '',
        name: 'Alejandra Cubides',
        id: 1,
        presenceIndicator: 'away'
      },
      unreadMessagesCount: 2,
      title: 'Looking for an Angular expert to upgrade angular project to the latest version',
      lastMessage: 'Angular itself is easy to upgrade, most problems arise with third-party libraries and deprecated code.',
      createdAt: new Date(),
      messages: [

      ]
    },
    {
      id: 2,
      sender: {
        avatarUrl: '',
        name: 'Pavel Salauyou',
        id: 2,
        presenceIndicator: 'online'
      },
      unreadMessagesCount: 0,
      title: 'Looking for an Angular expert to upgrade angular project to the latest version',
      lastMessage: 'Angular itself is easy to upgrade, most problems arise with third-party libraries and deprecated code.',
      createdAt: new Date(),
      messages: []
    }
  ];
  sidebarActive = true;
  selectedThread: MessengerThread = this.threads[0];

  selectThread(thread: MessengerThread) {
    this.selectedThread = thread;
  }

  isThreadSelected(thread: MessengerThread) {
    return thread.id === this.selectedThread?.id;
  }

  toggleSidebar() {
    this.sidebarActive = !this.sidebarActive;
  }
}
