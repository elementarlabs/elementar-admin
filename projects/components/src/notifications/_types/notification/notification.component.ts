import { Component } from '@angular/core';

@Component({
  selector: 'emr-notification',
  exportAs: 'emrNotification',
  standalone: true,
  imports: [],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss',
  host: {
    'class': 'emr-notification'
  }
})
export class NotificationComponent {

}
