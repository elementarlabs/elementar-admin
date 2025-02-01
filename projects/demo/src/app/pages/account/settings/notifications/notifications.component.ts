import { Component } from '@angular/core';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { HorizontalDividerComponent } from '@elementar-ui/components/divider';

@Component({
  selector: 'app-notifications',
  imports: [
    MatSlideToggle,
    HorizontalDividerComponent
  ],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.scss'
})
export class NotificationsComponent {

}
