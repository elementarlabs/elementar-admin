import { Component } from '@angular/core';
import { PlaygroundComponent } from '@meta/playground/playground.component';
import { BasicTimelineExampleComponent } from '../_examples/basic-timeline-example/basic-timeline-example.component';
import {
  TimelineTimestampExampleComponent
} from '../_examples/timeline-timestamp-example/timeline-timestamp-example.component';
import {
  TimelineWithCutsomIndicatorExampleComponent
} from '../_examples/timeline-with-cutsom-indicator-example/timeline-with-cutsom-indicator-example.component';
import { PageComponent } from '@meta/page/page.component';
import { PageContentDirective } from '@meta/page/page-content.directive';

@Component({
  selector: 'app-overview',
  imports: [
    PlaygroundComponent,
    BasicTimelineExampleComponent,
    TimelineTimestampExampleComponent,
    TimelineWithCutsomIndicatorExampleComponent,
    PageComponent,
    PageContentDirective
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
