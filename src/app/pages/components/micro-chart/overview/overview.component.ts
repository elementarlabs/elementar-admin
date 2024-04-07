import { Component } from '@angular/core';
import { PlaygroundComponent } from '@meta/playground/playground.component';
import {
  MicroChartAreaLineExampleComponent
} from '../_examples/micro-chart-area-line-example/micro-chart-area-line-example.component';

@Component({
  standalone: true,
  imports: [
    PlaygroundComponent,
    MicroChartAreaLineExampleComponent
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
