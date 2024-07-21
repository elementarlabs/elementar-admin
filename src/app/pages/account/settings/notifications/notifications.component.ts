import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { HDividerComponent } from '@elementar/components/divider';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [
    MatButton,
    MatIcon,
    MatSlideToggle,
    HDividerComponent
  ],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.scss'
})
export class NotificationsComponent {

}
