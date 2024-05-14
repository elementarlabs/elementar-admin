import { Component } from '@angular/core';
import {
  LineMicroChartComponent, MicroChartTooltipComponent
} from '@elementar/components';

@Component({
  selector: 'app-line-micro-chart-example',
  standalone: true,
  imports: [
    LineMicroChartComponent,
    MicroChartTooltipComponent
  ],
  templateUrl: './line-micro-chart-example.component.html',
  styleUrl: './line-micro-chart-example.component.scss'
})
export class LineMicroChartExampleComponent {

}
