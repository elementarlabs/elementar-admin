import { Component } from '@angular/core';
import { ShuffleArrayPipe } from '@demo/meta/shuffle-array.pipe';
import {
  MchartBarComponent,
  MchartTooltipBodyComponent,
  MchartTooltipComponent, MchartTooltipTitleComponent
} from '@elementar/components/micro-chart';

@Component({
  selector: 'app-mchart-bar-with-tooltip-example',
  standalone: true,
  imports: [
    MchartBarComponent,
    ShuffleArrayPipe,
    MchartTooltipBodyComponent,
    MchartTooltipComponent,
    MchartTooltipTitleComponent
  ],
  templateUrl: './mchart-bar-with-tooltip-example.component.html',
  styleUrl: './mchart-bar-with-tooltip-example.component.scss'
})
export class MchartBarWithTooltipExampleComponent {
}
