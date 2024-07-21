import { Component } from '@angular/core';
import { ShuffleArrayPipe } from '@meta/shuffle-array.pipe';
import { MchartPieComponent } from '@elementar/components/micro-chart';

@Component({
  selector: 'app-mchart-pie-with-legend-example',
  standalone: true,
  imports: [
    ShuffleArrayPipe,
    MchartPieComponent
  ],
  templateUrl: './mchart-pie-with-legend-example.component.html',
  styleUrl: './mchart-pie-with-legend-example.component.scss'
})
export class MchartPieWithLegendExampleComponent {
  data = [6, 2, 3, 8, 10];
  labels = ['Chrome', 'Edge', 'Opera', 'Firefox', 'Safari'];
}
