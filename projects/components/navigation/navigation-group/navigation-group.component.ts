import { Component, forwardRef, signal } from '@angular/core';
import { NAVIGATION_GROUP } from '../types';

let nextId = 0;

@Component({
  selector: 'emr-navigation-group',
  exportAs: 'emrNavigationGroup',
  templateUrl: './navigation-group.component.html',
  styleUrl: './navigation-group.component.scss',
  providers: [
    {
      provide: NAVIGATION_GROUP,
      useExisting: forwardRef(() => NavigationGroupComponent)
    }
  ],
  host: {
    'class': 'emr-navigation-group'
  }
})
export class NavigationGroupComponent {
  readonly key = signal(`emr-navigation-group-${nextId++}`);
}
