import { Component } from '@angular/core';

@Component({
  selector: 'emr-navigation-group',
  exportAs: 'emrNavigationGroup',
  templateUrl: './navigation-group.component.html',
  styleUrl: './navigation-group.component.scss',
  host: {
    'class': 'emr-navigation-group'
  }
})
export class NavigationGroupComponent {
}
