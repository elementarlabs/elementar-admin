import { Component } from '@angular/core';
import { ToolbarComponent } from '@elementar/shared/sidebar';

@Component({
  selector: 'app-toolbar-widget-example',
  standalone: true,
  imports: [
    ToolbarComponent
  ],
  templateUrl: './toolbar-widget-example.component.html',
  styleUrl: './toolbar-widget-example.component.scss'
})
export class ToolbarWidgetExampleComponent {

}
