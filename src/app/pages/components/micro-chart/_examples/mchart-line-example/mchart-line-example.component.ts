import { Component } from '@angular/core';
import {
  MchartLineComponent,
  MchartTooltipBodyComponent,
  MchartTooltipComponent,
  MchartTooltipTitleComponent
} from '@elementar/components';

@Component({
  selector: 'app-mchart-line-example',
  standalone: true,
  imports: [
    MchartLineComponent,
    MchartTooltipComponent,
    MchartTooltipBodyComponent,
    MchartTooltipTitleComponent
  ],
  templateUrl: './mchart-line-example.component.html',
  styleUrl: './mchart-line-example.component.scss'
})
export class MchartLineExampleComponent {

}
