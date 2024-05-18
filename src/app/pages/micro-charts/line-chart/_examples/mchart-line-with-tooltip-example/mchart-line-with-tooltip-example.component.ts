import { Component } from '@angular/core';
import {
  MchartLineComponent,
  MchartTooltipBodyComponent,
  MchartTooltipComponent,
  MchartTooltipTitleComponent
} from '@elementar/components';

@Component({
  selector: 'app-mchart-line-with-tooltip-example',
  standalone: true,
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
