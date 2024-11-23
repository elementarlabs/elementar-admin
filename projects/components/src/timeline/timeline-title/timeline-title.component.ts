import { Component } from '@angular/core';

@Component({
    selector: 'emr-timeline-title',
    exportAs: 'emrTimelineTitle',
    templateUrl: './timeline-title.component.html',
    styleUrl: './timeline-title.component.scss',
    host: {
        'class': 'emr-timeline-title'
    },
    standalone: false
})
export class TimelineTitleComponent {

}
