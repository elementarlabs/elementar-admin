import { Component } from '@angular/core';
import { TotalSubscribersWidgetComponent } from '@elementar/store/widgets';

@Component({
  selector: 'app-total-subscribers-example',
  standalone: true,
  imports: [
    TotalSubscribersWidgetComponent
  ],
  templateUrl: './total-subscribers-example.component.html',
  styleUrl: './total-subscribers-example.component.scss'
})
export class TotalSubscribersExampleComponent {

}
