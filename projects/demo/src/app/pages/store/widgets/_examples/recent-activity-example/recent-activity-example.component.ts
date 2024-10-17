import { Component } from '@angular/core';
import { RecentActivityWidgetComponent } from '@elementar/store/widgets';

@Component({
  selector: 'app-recent-activity-example',
  standalone: true,
  imports: [
    RecentActivityWidgetComponent
  ],
  templateUrl: './recent-activity-example.component.html',
  styleUrl: './recent-activity-example.component.scss'
})
export class RecentActivityExampleComponent {

}
