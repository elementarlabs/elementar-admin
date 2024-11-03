import { Component } from '@angular/core';
import { MatAnchor, MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatTooltip } from '@angular/material/tooltip';
import { IconComponent } from '@elementar/components/icon';
import { AvatarComponent } from '@elementar/components/avatar';

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
    MatAnchor,
    AvatarComponent
  ],
  templateUrl: './talent-profile.component.html',
  styleUrl: './talent-profile.component.scss'
})
export class TalentProfileComponent {
  followed = false;
  peopleAlsoViewed: Person[] = [
    {
      avatarUrl: 'assets/avatars/5.svg',
      name: 'Beaulah Hansmann',
      occupation: 'CEO of amazing company'
    },
    {
      avatarUrl: 'assets/avatars/6.svg',
      name: 'Laree Alaman',
      occupation: 'CEO of amazing company'
    },
    {
      avatarUrl: 'assets/avatars/7.svg',
      name: 'Tom Hearron',
      occupation: 'Software engineer'
    }
  ];
  languages = [
    {
      name: 'English',
      level: 'Native'
    },
    {
      name: 'German',
      level: 'Fluent'
    },
    {
      name: 'Spanish',
      level: 'Basic'
    }
  ];
  skills = [
    {
      name: 'Typescript',
      level: 'Good'
    },
    {
      name: 'Angular',
      level: 'Medium'
    },
    {
      name: 'Rest API',
      level: 'Good'
    },
    {
      name: 'NestJS',
      level: 'Medium'
    }
  ];

  follow(): void {
    this.followed = true;
  }

  unfollow(): void {
    this.followed = false;
  }
}
