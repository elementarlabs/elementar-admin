import { Component } from '@angular/core';

@Component({
    selector: 'emr-skeleton-line',
    exportAs: 'emrSkeletonLine',
    template: '',
    styleUrls: ['./skeleton-line.component.scss'],
    host: {
        'class': 'emr-skeleton-item emr-skeleton-line'
    },
    standalone: false
})
export class SkeletonLineComponent {
}
