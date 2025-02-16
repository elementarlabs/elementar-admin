import { Component } from '@angular/core';
import { NavigationComponent, NavigationItemComponent } from '@elementar-ui/components';

@Component({
  selector: 'app-basic-navigation-example',
  imports: [
    NavigationItemComponent,
    NavigationComponent
  ],
  templateUrl: './basic-navigation-example.component.html',
  styleUrl: './basic-navigation-example.component.scss'
})
export class BasicNavigationExampleComponent {

}
