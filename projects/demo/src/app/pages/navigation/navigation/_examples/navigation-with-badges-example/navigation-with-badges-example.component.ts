import { Component } from '@angular/core';
import {
  NavigationComponent,
  NavigationGroupComponent,
  NavigationGroupMenuComponent,
  NavigationGroupToggleComponent,
  NavigationItemBadgeDirective,
  NavigationItemComponent
} from '@elementar/components/navigation';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-navigation-with-badges-example',
  imports: [
    MatIcon,
    NavigationItemBadgeDirective,
    NavigationItemComponent,
    NavigationGroupToggleComponent,
    NavigationGroupMenuComponent,
    NavigationGroupComponent,
    NavigationComponent
  ],
  templateUrl: './navigation-with-badges-example.component.html',
  styleUrl: './navigation-with-badges-example.component.scss'
})
export class NavigationWithBadgesExampleComponent {

}
