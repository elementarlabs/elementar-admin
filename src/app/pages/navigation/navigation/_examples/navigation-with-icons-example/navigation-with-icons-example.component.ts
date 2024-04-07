import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { EmrNavigationModule } from '@components/navigation';

@Component({
  selector: 'app-navigation-with-icons-example',
  standalone: true,
  imports: [
    MatIcon,
    EmrNavigationModule
  ],
  templateUrl: './navigation-with-icons-example.component.html',
  styleUrl: './navigation-with-icons-example.component.scss'
})
export class NavigationWithIconsExampleComponent {

}
