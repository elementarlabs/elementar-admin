import { Component } from '@angular/core';
import {
  SkeletonBlockComponent,
  SkeletonCircleComponent,
  SkeletonComponent,
  SkeletonLineComponent
} from '@elementar-ui/components/skeleton';

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
