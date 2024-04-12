import { Component } from '@angular/core';

@Component({
  selector: 'emr-skeleton-block',
  exportAs: 'emrSkeletonBlock',
  template: '',
  styleUrls: ['./skeleton-block.component.css'],
  host: {
    'class': 'emr-skeleton-item emr-skeleton-block'
  }
})
export class SkeletonBlockComponent {
}
