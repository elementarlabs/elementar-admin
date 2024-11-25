import { Component } from '@angular/core';
import { AvatarComponent } from '@elementar/components/avatar';
import {
  TimelineAttributesComponent, TimelineComponent,
  TimelineDescriptionComponent, TimelineHeaderComponent, TimelineItemComponent,
  TimelineTitleComponent
} from '@elementar/components/timeline';

@Component({
  selector: 'app-basic-timeline-example',
  imports: [
    AvatarComponent,
    TimelineDescriptionComponent,
    TimelineAttributesComponent,
    TimelineTitleComponent,
    TimelineItemComponent,
    TimelineHeaderComponent,
    TimelineComponent
  ],
  templateUrl: './basic-timeline-example.component.html',
  styleUrl: './basic-timeline-example.component.scss'
})
export class BasicTimelineExampleComponent {
}
