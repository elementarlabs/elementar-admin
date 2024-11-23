import { Component } from '@angular/core';
import { EmrTimelineModule } from '@elementar/components/timeline';
import { AvatarComponent } from '@elementar/components/avatar';

@Component({
    selector: 'app-basic-timeline-example',
    imports: [
        EmrTimelineModule,
        AvatarComponent
    ],
    templateUrl: './basic-timeline-example.component.html',
    styleUrl: './basic-timeline-example.component.scss'
})
export class BasicTimelineExampleComponent {
}
