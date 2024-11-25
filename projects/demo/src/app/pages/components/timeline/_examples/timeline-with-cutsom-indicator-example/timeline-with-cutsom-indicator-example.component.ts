import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { AvatarComponent } from '@elementar/components/avatar';
import {
  TimelineComponent, TimelineDescriptionComponent,
  TimelineHeaderComponent,
  TimelineItemComponent,
  TimelineItemIndicatorDirective,
  TimelineTimestampComponent, TimelineTitleComponent
} from '@elementar/components/timeline';

@Component({
  selector: 'app-timeline-with-cutsom-indicator-example',
  imports: [
    MatIcon,
    AvatarComponent,
    TimelineItemIndicatorDirective,
    TimelineItemComponent,
    TimelineHeaderComponent,
    TimelineComponent,
    TimelineTimestampComponent,
    TimelineDescriptionComponent,
    TimelineTitleComponent
  ],
  templateUrl: './timeline-with-cutsom-indicator-example.component.html',
  styleUrl: './timeline-with-cutsom-indicator-example.component.scss'
})
export class TimelineWithCutsomIndicatorExampleComponent {
}
