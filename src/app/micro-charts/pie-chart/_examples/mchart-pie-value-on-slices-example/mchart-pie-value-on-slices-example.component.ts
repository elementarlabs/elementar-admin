import { Component } from '@angular/core';
import { MchartPieComponent } from '@elementar-ui/components/micro-chart';
import { ShuffleArrayPipe } from '@meta/shuffle-array.pipe';

@Component({
  selector: 'app-mchart-pie-value-on-slices-example',
  imports: [
    MchartPieComponent,
    ShuffleArrayPipe
  ],
  templateUrl: './mchart-pie-value-on-slices-example.component.html',
  styleUrl: './mchart-pie-value-on-slices-example.component.scss'
})
export class MchartPieValueOnSlicesExampleComponent {
  data1 = [1, 2, 3];
  data2 = [5, 2, 3];
  data3 = [1, 2, 3, 4];
  data4 = [6, 2, 3, 8, 10];
}
