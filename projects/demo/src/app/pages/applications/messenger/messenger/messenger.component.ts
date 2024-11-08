import { Component, signal } from '@angular/core';
import { MatInput } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';
import { MatButton, MatIconButton } from '@angular/material/button';
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
import { SafeHtmlPipe } from '@elementar/components/core';
import {
  MatAccordion,
  MatExpansionPanel,
  MatExpansionPanelDescription,
  MatExpansionPanelTitle,
  MatExpansionPanelHeader
} from '@angular/material/expansion';
import { MatDivider } from '@angular/material/divider';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';

interface MessengerMessage {
  id: any;
  content: any;
  type: 'default' | 'attachment' | string;
  sender: {
    avatarUrl: string;
    name: string;
    id: any;
    presenceIndicator: AvatarPresenceIndicator;
  };
  createdAt: string | Date;
  isDelivered: boolean;
}

interface MessengerThread {
  id: any;
  membersCount: number;
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
  members: MessengerMember[];
}

interface MessengerMember {
  avatarUrl: string;
  name: string;
  id: any;
  presenceIndicator: AvatarPresenceIndicator;
  status: string;
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
    CommentEditorCommandToggleToolbarDirective,
    SafeHtmlPipe,
    MatExpansionPanel,
    MatAccordion,
    MatExpansionPanelTitle,
    MatExpansionPanelDescription,
    MatExpansionPanelHeader,
    MatButton,
    MatDivider,
    MatMenu,
    MatMenuItem,
    MatMenuTrigger
  ],
  templateUrl: './messenger.component.html',
  styleUrl: './messenger.component.scss'
})
export class MessengerComponent {
  threads: MessengerThread[] = [
    {
      id: 1,
      membersCount: 2,
      sender: {
        avatarUrl: '',
        name: 'Alejandra Cubides',
        id: 1,
        presenceIndicator: 'away'
      },
      members: [
        {
          avatarUrl: '',
          name: 'Alejandra Cubides',
          id: 1,
          presenceIndicator: 'away',
          status: 'Busy'
        },
        {
          avatarUrl: '',
          name: 'Pavel Salauyou',
          id: 2,
          presenceIndicator: 'online',
          status: 'At home'
        }
      ],
      unreadMessagesCount: 2,
      title: 'Looking for an Angular expert to upgrade angular project to the latest version',
      lastMessage: 'Angular itself is easy to upgrade, most problems arise with third-party libraries and deprecated code.',
      createdAt: new Date(),
      messages: [
        {
          id: 1,
          type: 'default',
          sender: {
            avatarUrl: '',
            name: 'Alejandra Cubides',
            id: 1,
            presenceIndicator: 'away'
          },
          content: `Hey! How’s work going for you these days?`,
          createdAt: new Date(),
          isDelivered: true
        },
        {
          id: 2,
          type: 'default',
          sender: {
            avatarUrl: '',
            name: 'Pavel Salauyou',
            id: 2,
            presenceIndicator: 'online'
          },
          content: `It’s been pretty good, actually. I just started a new position in project management, so I’m still learning the ropes. What about you?`,
          createdAt: new Date(),
          isDelivered: false
        },
        {
          id: 3,
          type: 'default',
          sender: {
            avatarUrl: '',
            name: 'Pavel Salauyou',
            id: 2,
            presenceIndicator: 'online'
          },
          content: `What about you?`,
          createdAt: new Date(),
          isDelivered: false
        },
        {
          id: 4,
          type: 'default',
          sender: {
            avatarUrl: '',
            name: 'Alejandra Cubides',
            id: 1,
            presenceIndicator: 'away'
          },
          content: `Nice! Congrats on the new role! Things are busy on my end—I’m still with the same company, but my team got a lot of new projects recently.`,
          createdAt: new Date(),
          isDelivered: false
        },
        {
          id: 4,
          type: 'default',
          sender: {
            avatarUrl: '',
            name: 'Alejandra Cubides',
            id: 1,
            presenceIndicator: 'away'
          },
          content: `What’s your day-to-day like in the new role?`,
          createdAt: new Date(),
          isDelivered: false
        },
        {
          id: 5,
          type: 'attachment',
          sender: {
            avatarUrl: '',
            name: 'Alejandra Cubides',
            id: 1,
            presenceIndicator: 'away'
          },
          content: {
            fileName: 'Terms & Conditions',
            fileType: 'pdf',
            pagesCount: 12,
            fileSize: '11MB',
            downloadLink: '',
            iconUrl: '/assets/file/pdf1.svg'
          },
          createdAt: new Date(),
          isDelivered: false
        },
      ]
    },
    {
      id: 2,
      membersCount: 2,
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
      messages: [],
      members: [
        {
          avatarUrl: '',
          name: 'Alejandra Cubides',
          id: 1,
          presenceIndicator: 'away',
          status: 'Busy'
        },
        {
          avatarUrl: '',
          name: 'Pavel Salauyou',
          id: 2,
          presenceIndicator: 'online',
          status: 'At home'
        }
      ]
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

  isNeedToShowTimeSeparator(messages: MessengerMessage[], index: number): boolean {
    return false;
  }

  isInnerMessage(messages: MessengerMessage[], index: number): boolean {
    if (index === 0) {
      return false;
    }

    const prevMessage = messages[index - 1];
    const currentMessage = messages[index];
    const prevCreatedAt = new Date(prevMessage.createdAt);
    const currentCreatedAt = new Date(currentMessage.createdAt);
    return prevMessage.sender.id === currentMessage.sender.id &&
      prevCreatedAt.getMonth() === currentCreatedAt.getMonth() &&
      prevCreatedAt.getFullYear() === currentCreatedAt.getFullYear() &&
      prevCreatedAt.getDate() === currentCreatedAt.getDate()
    ;
  }
}
