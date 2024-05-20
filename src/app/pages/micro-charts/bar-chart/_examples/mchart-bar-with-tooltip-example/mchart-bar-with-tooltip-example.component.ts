import { Component } from '@angular/core';
import {
  MchartBarComponent,
  MchartTooltipBodyComponent,
  MchartTooltipComponent,
  MchartTooltipTitleComponent
} from '@elementar/components';
import { ShuffleArrayPipe } from '@meta/shuffle-array.pipe';

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
