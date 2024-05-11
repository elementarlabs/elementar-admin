import { Component } from '@angular/core';
import { BarChartComponent } from '@elementar/components';
import { format, formatPrefix } from 'd3';

@Component({
  selector: 'app-micro-chart-bar-example',
  standalone: true,
  imports: [
    BarChartComponent
  ],
  templateUrl: './micro-chart-bar-example.component.html',
  styleUrl: './micro-chart-bar-example.component.scss'
})
export class MicroChartBarExampleComponent {
  format(value: any): any {
    return formatPrefix(",.0", value);
  }
}
