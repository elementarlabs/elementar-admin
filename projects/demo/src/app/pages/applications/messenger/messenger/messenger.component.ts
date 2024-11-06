import { Component } from '@angular/core';
import { MatInput } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { DicebearComponent } from '@elementar/components/avatar';
import { DatePipe } from '@angular/common';

interface MessengerMessage {
  content: string;
}

interface MessengerThread {
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
    DatePipe
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
        id: 1
      },
      unreadMessagesCount: 2,
      title: 'Looking for an Angular expert to upgrade angular project to the latest version',
      lastMessage: 'Angular itself is easy to upgrade, most problems arise with third-party libraries and deprecated code.',
      createdAt: new Date(),
      messages: []
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
