import { Component } from '@angular/core';
import { AvatarComponent, AvatarGroupComponent, AvatarTotalComponent } from '@elementar/components/avatar';

@Component({
  selector: 'emr-events-widget',
  standalone: true,
  templateUrl: './events-widget.component.html',
  imports: [
    AvatarGroupComponent,
    AvatarComponent,
    AvatarTotalComponent
  ],
  styleUrl: './events-widget.component.scss'
})
export class EventsWidgetComponent {

}
