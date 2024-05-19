import { Component } from '@angular/core';
import {
  MchartLineComponent,
  MchartTooltipBodyComponent,
  MchartTooltipComponent,
  MchartTooltipTitleComponent
} from '@elementar/components';

@Component({
  selector: 'app-total-projects-widget',
  standalone: true,
  imports: [
    MchartLineComponent,
    MchartTooltipComponent,
    MchartTooltipTitleComponent,
    MchartTooltipBodyComponent

  ],
  templateUrl: './total-projects-widget.component.html',
  styleUrl: './total-projects-widget.component.scss'
})
export class TotalProjectsWidgetComponent {
  data = [47, 54, 38, 24, 65, 37];
  labels = ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'];
}
