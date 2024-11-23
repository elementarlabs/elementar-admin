import { Component } from '@angular/core';
import {
  MchartLineComponent,
  MchartTooltipBodyComponent,
  MchartTooltipComponent,
  MchartTooltipTitleComponent
} from '@elementar/components/micro-chart';

@Component({
  selector: 'app-mchart-line-with-tooltip-example',
  imports: [
    MchartLineComponent,
    MchartTooltipTitleComponent,
    MchartTooltipBodyComponent,
    MchartTooltipComponent
  ],
  templateUrl: './mchart-line-with-tooltip-example.component.html',
  styleUrl: './mchart-line-with-tooltip-example.component.scss'
})
export class MchartLineWithTooltipExampleComponent {

}
