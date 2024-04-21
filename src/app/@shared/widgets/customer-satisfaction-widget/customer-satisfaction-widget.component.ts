import { Component } from '@angular/core';
import { EmrAvatarModule } from '@elementar/components';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-customer-satisfaction-widget',
  standalone: true,
  imports: [
    EmrAvatarModule,
    MatIcon
  ],
  templateUrl: './customer-satisfaction-widget.component.html',
  styleUrl: './customer-satisfaction-widget.component.scss'
})
export class CustomerSatisfactionWidgetComponent {

}
