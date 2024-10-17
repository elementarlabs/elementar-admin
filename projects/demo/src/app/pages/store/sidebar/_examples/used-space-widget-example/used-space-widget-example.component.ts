import { Component } from '@angular/core';
import { UsedSpaceComponent } from '@elementar/store/sidebar';

@Component({
  selector: 'app-used-space-widget-example',
  standalone: true,
  imports: [
    UsedSpaceComponent
  ],
  templateUrl: './used-space-widget-example.component.html',
  styleUrl: './used-space-widget-example.component.scss'
})
export class UsedSpaceWidgetExampleComponent {

}
