import { Component } from '@angular/core';
import { MatInput } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { DicebearComponent } from '@elementar/components/avatar';
import { DatePipe } from '@angular/common';

interface MessengerMessage {
  id: any;
  sender: {
    avatarUrl: string;
    name: string;
    id: any;
  };
  title: string;
  lastMessage: string;
  createdAt: string | Date;
  unreadMessagesCount: number;
}

@Component({
  selector: 'app-messenger',
  standalone: true,
  imports: [
    MatInput,
    MatIcon,
    MatIconButton,
    DicebearComponent,
    DatePipe
  ],
  templateUrl: './messenger.component.html',
  styleUrl: './messenger.component.scss'
})
export class MessengerComponent {
  selectedMessageId = 1;
  messages: MessengerMessage[] = [
    {
      id: 1,
      sender: {
        avatarUrl: '',
        name: 'Alejandra Cubides',
        id: 1
      },
      unreadMessagesCount: 2,
      title: 'Looking for an Angular expert to upgrade angular project to the latest version',
      lastMessage: 'Angular itself is easy to upgrade, most problems arise with third-party libraries and deprecated code.',
      createdAt: new Date(),
    },
    {
      id: 2,
      sender: {
        avatarUrl: '',
        name: 'Pavel Salauyou',
        id: 2
      },
      unreadMessagesCount: 0,
      title: 'Looking for an Angular expert to upgrade angular project to the latest version',
      lastMessage: 'Angular itself is easy to upgrade, most problems arise with third-party libraries and deprecated code.',
      createdAt: new Date(),
    }
  ];
  sidebarActive = true;

  selectMessage(message: MessengerMessage) {
    this.selectedMessageId = message.id;
  }

  toggleSidebar() {
    this.sidebarActive = !this.sidebarActive;
  }
}
