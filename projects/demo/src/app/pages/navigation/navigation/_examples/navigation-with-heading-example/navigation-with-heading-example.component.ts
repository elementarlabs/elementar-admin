import { Component } from '@angular/core';
import {
  NavigationComponent,
  NavigationHeadingComponent,
  NavigationItemComponent
} from '@elementar/components/navigation';

@Component({
  selector: 'app-navigation-with-heading-example',
  imports: [
    NavigationItemComponent,
    NavigationHeadingComponent,
    NavigationComponent
  ],
  templateUrl: './navigation-with-heading-example.component.html',
  styleUrl: './navigation-with-heading-example.component.scss'
})
export class NavigationWithHeadingExampleComponent {

}
