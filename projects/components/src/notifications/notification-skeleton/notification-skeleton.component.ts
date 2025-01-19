import { Component } from '@angular/core';

import { SkeletonComponent } from '../../skeleton/skeleton/skeleton.component';
import { SkeletonCircleComponent } from '../../skeleton/skeleton-circle/skeleton-circle.component';
import { SkeletonLineComponent } from '../../skeleton/skeleton-line/skeleton-line.component';
import { SkeletonBlockComponent } from '../../skeleton/skeleton-block/skeleton-block.component';

@Component({
  selector: 'emr-notification-skeleton',
  exportAs: 'emrNotificationSkeleton',
  imports: [
    SkeletonComponent,
    SkeletonCircleComponent,
    SkeletonLineComponent,
    SkeletonBlockComponent
  ],
  templateUrl: './notification-skeleton.component.html',
  styleUrl: './notification-skeleton.component.scss',
  host: {
    'class': 'emr-notification-skeleton',
  }
})
export class NotificationSkeletonComponent {

}
