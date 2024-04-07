import { Component } from '@angular/core';
import { AreaLineChartComponent } from '@components/micro-chart/area-line-chart/area-line-chart.component';

@Component({
  selector: 'app-micro-chart-area-line-example',
  standalone: true,
  imports: [
    AreaLineChartComponent
  ],
  templateUrl: './micro-chart-area-line-example.component.html',
  styleUrl: './micro-chart-area-line-example.component.scss'
})
export class MicroChartAreaLineExampleComponent {
  data: number[] = [5, 20, 15, 50, 25, 50];
}
