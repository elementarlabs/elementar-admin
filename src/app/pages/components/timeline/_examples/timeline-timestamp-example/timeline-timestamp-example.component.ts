import { Component } from '@angular/core';
import { EmrTimelineModule } from '@elementar/components';
import { EmrAvatarModule } from '@elementar/components';

@Component({
  selector: 'app-timeline-timestamp-example',
  standalone: true,
  imports: [
    EmrTimelineModule,
    EmrAvatarModule
  ],
  templateUrl: './timeline-timestamp-example.component.html',
  styleUrl: './timeline-timestamp-example.component.scss'
})
export class TimelineTimestampExampleComponent {

}
