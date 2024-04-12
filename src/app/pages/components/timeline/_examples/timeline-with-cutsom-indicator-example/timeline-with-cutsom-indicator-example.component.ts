import { Component } from '@angular/core';
import { EmrTimelineModule } from '@elementar/components';
import { EmrAvatarModule } from '@elementar/components';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-timeline-with-cutsom-indicator-example',
  standalone: true,
  imports: [
    EmrTimelineModule,
    EmrAvatarModule,
    MatIcon
  ],
  templateUrl: './timeline-with-cutsom-indicator-example.component.html',
  styleUrl: './timeline-with-cutsom-indicator-example.component.scss'
})
export class TimelineWithCutsomIndicatorExampleComponent {

}
