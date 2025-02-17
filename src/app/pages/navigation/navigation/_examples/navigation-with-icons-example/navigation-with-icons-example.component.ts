import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import {
  NavigationComponent,
  NavigationItemComponent,
  NavigationItemIconDirective
} from '@elementar-ui/components';

@Component({
  selector: 'app-navigation-with-icons-example',
  imports: [
    MatIcon,
    NavigationItemIconDirective,
    NavigationItemComponent,
    NavigationComponent,
  ],
  templateUrl: './navigation-with-icons-example.component.html',
  styleUrl: './navigation-with-icons-example.component.scss'
})
export class NavigationWithIconsExampleComponent {

}
