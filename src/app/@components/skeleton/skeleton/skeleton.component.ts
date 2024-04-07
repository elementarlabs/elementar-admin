import { Component } from '@angular/core';

@Component({
  selector: 'emr-skeleton',
  exportAs: 'emrSkeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.css'],
  host: {
    'class': 'emr-skeleton'
  }
})
export class SkeletonComponent {
}
