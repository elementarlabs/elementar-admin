import { Component } from '@angular/core';
import { NavigationComponent, NavigationItemComponent } from '@elementar/components/navigation';

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
