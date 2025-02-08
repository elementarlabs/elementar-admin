import { Component } from '@angular/core';

@Component({
  selector: 'emr-navigation-heading',
  exportAs: 'emrNavigationHeading',
  templateUrl: './navigation-heading.component.html',
  styleUrl: './navigation-heading.component.scss',
  host: {
    'class': 'emr-navigation-heading'
  }
})
export class NavigationHeadingComponent {
}
