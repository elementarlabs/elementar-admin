import { Component } from '@angular/core';

@Component({
    selector: 'emr-timeline-header',
    exportAs: 'emrTimelineHeader',
    templateUrl: './timeline-header.component.html',
    styleUrl: './timeline-header.component.scss',
    host: {
        'class': 'emr-timeline-header'
    },
    standalone: false
})
export class TimelineHeaderComponent {

}
