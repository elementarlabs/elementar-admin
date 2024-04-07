import { Component } from '@angular/core';
import {
  BasicCheckboxesExampleComponent
} from '../../../forms/checkbox/_examples/basic-checkboxes-example/basic-checkboxes-example.component';
import { PlaygroundComponent } from '@meta/playground/playground.component';
import { BasicTimelineExampleComponent } from '../_examples/basic-timeline-example/basic-timeline-example.component';
import {
  TimelineTimestampExampleComponent
} from '../_examples/timeline-timestamp-example/timeline-timestamp-example.component';
import {
  TimelineWithCutsomIndicatorExampleComponent
} from '../_examples/timeline-with-cutsom-indicator-example/timeline-with-cutsom-indicator-example.component';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [
    BasicCheckboxesExampleComponent,
    PlaygroundComponent,
    BasicTimelineExampleComponent,
    TimelineTimestampExampleComponent,
    TimelineWithCutsomIndicatorExampleComponent
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
