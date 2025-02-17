import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { AvatarComponent } from '@elementar-ui/components';

@Component({
  imports: [
    MatButton,
    MatIcon,
    AvatarComponent
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
