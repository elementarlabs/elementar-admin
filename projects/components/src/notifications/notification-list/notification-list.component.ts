import { AfterContentInit, Component, contentChildren, input, QueryList } from '@angular/core';
import { EmrSkeletonModule } from '@elementar/components/skeleton';
import { HDividerComponent } from '@elementar/components/divider';
import { RouterLink } from '@angular/router';
import { NgComponentOutlet, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'emr-notification-list',
  exportAs: 'emrNotificationList',
  standalone: true,
  imports: [
    EmrSkeletonModule,
    HDividerComponent,
    RouterLink,
    NgTemplateOutlet,
    NgComponentOutlet
  ],
  templateUrl: './notification-list.component.html',
  styleUrl: './notification-list.component.scss',
  host: {
    'class': 'emr-notification-list'
  }
})
export class NotificationListComponent implements AfterContentInit{
  notifications = input<any[]>([]);

  ngAfterContentInit() {

  }
}
