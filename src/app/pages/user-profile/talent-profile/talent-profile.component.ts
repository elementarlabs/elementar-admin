import { Component } from '@angular/core';
import { MatAnchor, MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatTooltip } from '@angular/material/tooltip';
import { EmrAvatarModule, IconComponent } from '@elementar/components';

interface Person {
  avatarUrl: string;
  name: string;
  occupation: string;
}

@Component({
  standalone: true,
  imports: [
    MatButton,
    MatIcon,
    MatIconButton,
    MatTooltip,
    IconComponent,
    EmrAvatarModule,
    MatAnchor
  ],
  templateUrl: './talent-profile.component.html',
  styleUrl: './talent-profile.component.scss'
})
export class TalentProfileComponent {
  followed = false;
  peopleAlsoViewed: Person[] = [
    {
      avatarUrl: 'https://xsgames.co/randomusers/assets/avatars/female/44.jpg',
      name: 'Beaulah Hansmann',
      occupation: 'CEO of amazing company'
    },
    {
      avatarUrl: 'https://xsgames.co/randomusers/assets/avatars/female/45.jpg',
      name: 'Laree Alaman',
      occupation: 'CEO of amazing company'
    },
    {
      avatarUrl: 'https://xsgames.co/randomusers/assets/avatars/male/45.jpg',
      name: 'Tom Hearron',
      occupation: 'Software engineer'
    }
  ];

  follow(): void {
    this.followed = true;
  }

  unfollow(): void {
    this.followed = false;
  }
}
