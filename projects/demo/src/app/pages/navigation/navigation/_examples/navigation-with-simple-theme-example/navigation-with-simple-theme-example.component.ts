import { Component } from '@angular/core';
import { EmrNavigationModule } from '@elementar/components/navigation';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-navigation-with-simple-theme-example',
  standalone: true,
  imports: [
    EmrNavigationModule,
    MatIcon
  ],
  templateUrl: './navigation-with-simple-theme-example.component.html',
  styleUrl: './navigation-with-simple-theme-example.component.scss'
})
export class NavigationWithSimpleThemeExampleComponent {

}
