import { Component } from '@angular/core';
import { EmrTimelineModule } from '@elementar/components/timeline';
import { MatIcon } from '@angular/material/icon';
import { AvatarComponent } from '@elementar/components/avatar';

@Component({
    selector: 'app-timeline-with-cutsom-indicator-example',
    imports: [
        EmrTimelineModule,
        MatIcon,
        AvatarComponent
    ],
    templateUrl: './timeline-with-cutsom-indicator-example.component.html',
    styleUrl: './timeline-with-cutsom-indicator-example.component.scss'
})
export class TimelineWithCutsomIndicatorExampleComponent {
}
