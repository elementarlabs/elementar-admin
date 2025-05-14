import { Component, ElementRef, WritableSignal, signal, effect, viewChild, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatDivider } from '@angular/material/divider';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatFormField, MatInput, MatSuffix } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';
import {
  PanelBodyComponent,
  PanelComponent,
  PanelFooterComponent,
  PanelHeaderComponent
} from '@elementar-ui/components/panel';
import { DicebearComponent } from '@elementar-ui/components/avatar'; // Для [ngClass]

interface Message {
  id: number;
  sender: 'me' | 'other';
  avatar: string;
  text: string;
  time: string;
  status?: 'sent' | 'delivered' | 'read';
  senderName?: string;
  isOnline?: boolean;
}

interface User {
  name: string;
  avatar: string;
  status: 'online' | 'offline';
  role?: string;
}

interface JoinRequestUser {
  name: string;
  avatar: string;
  timeAgo: string;
  team: string;
  isOnline: boolean;
}

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatIcon,
    MatDivider,
    MatButton,
    MatInput,
    MatIconButton,
    MatFormField,
    PanelComponent,
    PanelBodyComponent,
    PanelHeaderComponent,
    PanelFooterComponent,
    MatSuffix,
    DicebearComponent
  ],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {
  chatMessagesContainerRef = viewChild.required<ElementRef>('messagesContainerRef');
  currentUser: WritableSignal<User> = signal({
    name: 'My User',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=40&q=60',
    status: 'online'
  });
  messages: WritableSignal<Message[]> = signal([
    { id: 1, sender: 'other', senderName: 'Sarah', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=40&q=60', text: 'Next week we are closing the project. Do You have questions?', time: '14:04' },
    { id: 2, sender: 'me', avatar: this.currentUser().avatar, text: 'This is excellent news!', time: '14:08', status: 'read', isOnline: true },
    { id: 3, sender: 'other', senderName: 'John', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBvcnRyYWl0fGVufDB8fDB8fHww&auto=format&fit=crop&w=40&q=60', text: 'I have checked the features, can not wait to demo them!', time: '14:26' },
    { id: 4, sender: 'other', senderName: 'Anna', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBvcnRyYWl0fGVufDB8fDB8fHww&auto=format&fit=crop&w=40&q=60', text: 'I have looked over the rollout plan, and everything seems spot on.', time: '15:09' },
    { id: 5, sender: 'me', avatar: this.currentUser().avatar, text: "Haven't seen the build yet, I'll look now.", time: '15:52', status: 'sent', isOnline: true },
    { id: 6, sender: 'me', avatar: this.currentUser().avatar, text: 'Checking the build now', time: '15:52', status: 'sent', isOnline: true },
    { id: 7, sender: 'other', senderName: 'John', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBvcnRyYWl0fGVufDB8fDB8fHww&auto=format&fit=crop&w=40&q=60', text: 'Tomorrow, I will send the link for the meeting', time: '17:40' }
  ]);
  joinRequestUser: WritableSignal<JoinRequestUser> = signal({
    name: 'Jane Perez',
    avatar: 'https://images.unsplash.com/photo-1595290263200-f92f403085f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBvcnRyYWl0JTIwYmVhcmR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=40&q=60',
    timeAgo: '1 day ago',
    team: 'Design Team',
    isOnline: true
  });
  newMessage: WritableSignal<string> = signal('');

  readonly closed = output();

  constructor() {
    effect(() => {
      this.messages();
      Promise.resolve().then(() => this.scrollToBottom());
    });
  }

  close(): void {
    this.closed.emit();
  }

  sendMessage(): void {
    if (this.newMessage().trim() === '') {
      return;
    }

    const newMsg: Message = {
      id: this.messages().length + 1,
      sender: 'me',
      avatar: this.currentUser().avatar,
      text: this.newMessage(),
      time: this.getCurrentTime(),
      status: 'sent',
      isOnline: this.currentUser().status === 'online'
    };
    this.messages.update(currentMessages => [...currentMessages, newMsg]);
    this.newMessage.set('');
    requestAnimationFrame(() => this.scrollToBottom());
  }

  getCurrentTime(): string {
    const now = new Date();
    return `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
  }

  scrollToBottom(): void {
    const container = this.chatMessagesContainerRef();

    if (container) {
      try {
        container.nativeElement.scrollTop = container.nativeElement.scrollHeight;
      } catch (err) {
        console.error('Scroll to bottom error:', err);
      }
    }
  }

  acceptJoinRequest(): void {
    console.log(`Accepted join request from ${this.joinRequestUser().name}`);
  }

  declineJoinRequest(): void {
    console.log(`Declined join request from ${this.joinRequestUser().name}`);
  }
}
