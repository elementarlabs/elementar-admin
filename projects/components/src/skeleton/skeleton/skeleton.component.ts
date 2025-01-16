import { Component, input } from '@angular/core';

@Component({
  selector: 'emr-skeleton',
  exportAs: 'emrSkeleton',
  templateUrl: './skeleton.component.html',
  styleUrl: './skeleton.component.scss',
  host: {
    'class': 'emr-skeleton',
    '[class.is-direction-row]': 'direction() === "row"',
    '[class.is-direction-col]': 'direction() === "col"',
  }
})
export class SkeletonComponent {
  direction = input<'row' | 'col'>('row');
}
