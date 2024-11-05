import { Component } from '@angular/core';
import { MatInput } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { DicebearComponent } from '@elementar/components/avatar';
import { DatePipe } from '@angular/common';

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
  messages = [
    {
      sender: {
        avatarUrl: '',
        name: 'Alejandra Cubides',
        id: 1
      },
      title: 'Looking for an Angular expert to upgrade angular project to the latest version',
      lastMessage: 'Angular itself is easy to upgrade, most problems arise with third-party libraries and deprecated code.',
      createdAt: new Date(),
    }
  ];
}
