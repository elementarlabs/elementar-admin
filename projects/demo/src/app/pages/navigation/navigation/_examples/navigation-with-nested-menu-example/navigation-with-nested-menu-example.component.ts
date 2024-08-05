import { Component } from '@angular/core';
import { EmrNavigationModule } from '@elementar/components/navigation';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-navigation-with-nested-menu-example',
  standalone: true,
  imports: [
    EmrNavigationModule,
    MatIcon
  ],
  templateUrl: './navigation-with-nested-menu-example.component.html',
  styleUrl: './navigation-with-nested-menu-example.component.scss'
})
export class NavigationWithNestedMenuExampleComponent {

}
