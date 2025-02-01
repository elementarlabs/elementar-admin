import { Component } from '@angular/core';
import {
  NavigationComponent,
  NavigationDividerComponent,
  NavigationItemComponent
} from '@elementar-ui/components/navigation';

@Component({
  selector: 'app-navigation-with-divider-example',
  imports: [
    NavigationDividerComponent,
    NavigationItemComponent,
    NavigationComponent
  ],
  templateUrl: './navigation-with-divider-example.component.html',
  styleUrl: './navigation-with-divider-example.component.scss'
})
export class NavigationWithDividerExampleComponent {

}
