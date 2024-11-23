import { Component } from '@angular/core';

@Component({
    selector: 'emr-timeline',
    exportAs: 'emrTimeline',
    templateUrl: './timeline.component.html',
    styleUrl: './timeline.component.scss',
    host: {
        'class': 'emr-timeline'
    },
    standalone: false
})
export class TimelineComponent {

}
