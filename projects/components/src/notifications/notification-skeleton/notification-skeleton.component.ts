import { Component } from '@angular/core';
import { EmrSkeletonModule } from '@elementar/components/skeleton';

@Component({
  selector: 'emr-notification-skeleton',
  standalone: true,
  imports: [
    EmrSkeletonModule
  ],
  templateUrl: './notification-skeleton.component.html',
  styleUrl: './notification-skeleton.component.scss'
})
export class NotificationSkeletonComponent {

}
