import { Component} from '@angular/core';
import { LineMicroChartComponent } from '@elementar/components';

@Component({
  selector: 'app-total-tasks-widget',
  standalone: true,
  templateUrl: './total-tasks-widget.component.html',
  imports: [
    LineMicroChartComponent
  ],
  styleUrl: './total-tasks-widget.component.scss'
})
export class TotalTasksWidgetComponent {
  data = [47, 54, 38, 24, 65, 37];
}
