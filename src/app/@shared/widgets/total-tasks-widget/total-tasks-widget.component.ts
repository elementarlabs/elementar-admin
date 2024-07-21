import { Component} from '@angular/core';
import {
  MchartLineComponent,
  MchartTooltipBodyComponent,
  MchartTooltipComponent, MchartTooltipTitleComponent
} from '@elementar/components/micro-chart';

@Component({
  selector: 'app-total-tasks-widget',
  standalone: true,
  templateUrl: './total-tasks-widget.component.html',
  imports: [
    MchartTooltipBodyComponent,
    MchartTooltipComponent,
    MchartTooltipTitleComponent,
    MchartLineComponent
  ],
  styleUrl: './total-tasks-widget.component.scss'
})
export class TotalTasksWidgetComponent {
  data = [47, 54, 38, 24, 65, 37];
  labels = ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'];
}
