import { Component } from '@angular/core';

@Component({
    selector: 'emr-skeleton-circle',
    exportAs: 'emrSkeletonCircle',
    template: '',
    styleUrls: ['./skeleton-circle.component.scss'],
    host: {
        'class': 'emr-skeleton-item emr-skeleton-circle'
    },
    standalone: false
})
export class SkeletonCircleComponent {
}
