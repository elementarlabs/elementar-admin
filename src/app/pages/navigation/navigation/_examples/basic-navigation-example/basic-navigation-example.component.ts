import { Component } from '@angular/core';
import { EmrNavigationModule } from '@components/navigation';

@Component({
  selector: 'app-basic-navigation-example',
  standalone: true,
  imports: [
    EmrNavigationModule
  ],
  templateUrl: './basic-navigation-example.component.html',
  styleUrl: './basic-navigation-example.component.scss'
})
export class BasicNavigationExampleComponent {

}
