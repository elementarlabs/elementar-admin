import { Component } from '@angular/core';
import { EmrAvatarModule } from '@elementar/components';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { VDividerComponent } from '@elementar/components';

@Component({
  standalone: true,
  imports: [
    EmrAvatarModule,
    MatButton,
    MatIcon,
    VDividerComponent
  ],
  templateUrl: './my-profile.component.html',
  styleUrl: './my-profile.component.scss'
})
export class MyProfileComponent {
  dateFormats = [
    'MM/DD/YYYY',
    'DD/MM/YYYY',
    'YYYY-MM-DD'
  ];
  myProfile = {
    firstName: 'Pavel',
    lastName: 'Salauyou',
    username: '@pavel.salauyou',
    email: 'pavel.salauyou@example.com',
    jobTitle: 'Team Lead',
    bio: 'Senior Angular Developer',
    phoneNumber: '+1(23)4567890',
    preferences: {
      language: {
        code: 'us',
        name: 'English (United States)'
      },
      dateFormat: 'DD/MM/YYYY',
      automaticTimeZone: {
        name: 'GMT+04:00',
        isEnabled: true
      }
    },
    address: {
      country: 'United Kingdom',
      city: 'London',
      postalCode: 'WC36 4UF',
      street: 'Broadway',
      building: 93,
      apartment: 1
    }
  };
}
