import { Component } from '@angular/core';
import { EmrTimelineModule } from '@components/timeline/timeline.module';
import { EmrAvatarModule } from '@components/avatar';

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
