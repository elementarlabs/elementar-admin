import { Component } from '@angular/core';
import { AvatarComponent } from '@elementar/components/avatar';
import {
  TimelineAttributesComponent, TimelineComponent,
  TimelineDescriptionComponent, TimelineHeaderComponent, TimelineItemComponent,
  TimelineTimestampComponent,
  TimelineTitleComponent
} from '@elementar/components/timeline';

@Component({
  selector: 'app-timeline-timestamp-example',
  imports: [
    AvatarComponent,
    TimelineTimestampComponent,
    TimelineTitleComponent,
    TimelineDescriptionComponent,
    TimelineAttributesComponent,
    TimelineItemComponent,
    TimelineHeaderComponent,
    TimelineComponent
  ],
  templateUrl: './timeline-timestamp-example.component.html',
  styleUrl: './timeline-timestamp-example.component.scss'
})
export class TimelineTimestampExampleComponent {

}
