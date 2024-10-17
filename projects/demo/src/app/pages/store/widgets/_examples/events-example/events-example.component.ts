import { Component } from '@angular/core';
import { EventsWidgetComponent } from '@elementar/store/widgets';

@Component({
  selector: 'app-events-example',
  standalone: true,
  imports: [
    EventsWidgetComponent
  ],
  templateUrl: './events-example.component.html',
  styleUrl: './events-example.component.scss'
})
export class EventsExampleComponent {

}
