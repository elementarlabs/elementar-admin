import { Component } from '@angular/core';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { HDividerComponent } from '@elementar/components/divider';

@Component({
  selector: 'app-notifications',
  imports: [
    MatSlideToggle,
    HDividerComponent
  ],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.scss'
})
export class NotificationsComponent {

}
