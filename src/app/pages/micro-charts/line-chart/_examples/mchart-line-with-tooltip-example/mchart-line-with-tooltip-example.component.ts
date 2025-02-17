import { Component } from '@angular/core';
import {
  MchartLineComponent,
  MchartTooltipBodyComponent,
  MchartTooltipComponent,
  MchartTooltipTitleComponent
} from '@elementar-ui/components';

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
