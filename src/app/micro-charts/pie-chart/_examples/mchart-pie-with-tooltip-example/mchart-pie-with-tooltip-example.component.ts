import { Component } from '@angular/core';
import {
  MchartPieComponent,
  MchartTooltipBodyComponent,
  MchartTooltipComponent,
  MchartTooltipTitleComponent
} from '@elementar-ui/components/micro-chart';
import { ShuffleArrayPipe } from '@meta/shuffle-array.pipe';

@Component({
  selector: 'app-mchart-pie-with-tooltip-example',
  imports: [
    MchartPieComponent,
    ShuffleArrayPipe,
    MchartTooltipBodyComponent,
    MchartTooltipComponent,
    MchartTooltipTitleComponent
  ],
  templateUrl: './mchart-pie-with-tooltip-example.component.html',
  styleUrl: './mchart-pie-with-tooltip-example.component.scss'
})
export class MchartPieWithTooltipExampleComponent {
  data1 = [1, 2, 3];
  data2 = [5, 2, 3];
  data3 = [1, 2, 3, 4];
  data4 = [6, 2, 3, 8, 10];
  labels = ['Chrome', 'Edge', 'Opera', 'Firefox', 'Safari'];
}
