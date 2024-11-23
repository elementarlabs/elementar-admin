import { Component } from '@angular/core';
import {
  BasicCheckboxesExampleComponent
} from '../../../forms/checkbox/_examples/basic-checkboxes-example/basic-checkboxes-example.component';
import { PlaygroundComponent } from '@demo/meta/playground/playground.component';
import { BasicTimelineExampleComponent } from '../_examples/basic-timeline-example/basic-timeline-example.component';
import {
  TimelineTimestampExampleComponent
} from '../_examples/timeline-timestamp-example/timeline-timestamp-example.component';
import {
  TimelineWithCutsomIndicatorExampleComponent
} from '../_examples/timeline-with-cutsom-indicator-example/timeline-with-cutsom-indicator-example.component';
import { PageComponent } from '@demo/meta/page/page.component';
import { PageContentDirective } from '@demo/meta/page/page-content.directive';

@Component({
    selector: 'app-overview',
    imports: [
        BasicCheckboxesExampleComponent,
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
