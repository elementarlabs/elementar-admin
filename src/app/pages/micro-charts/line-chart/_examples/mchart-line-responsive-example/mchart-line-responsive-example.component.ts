import { Component } from '@angular/core';
import {
  EmrResizableContainerModule,
  MchartLineComponent,
  MchartTooltipBodyComponent,
  MchartTooltipComponent, MchartTooltipTitleComponent
} from '@elementar/components';

@Component({
  selector: 'app-mchart-line-responsive-example',
  standalone: true,
  imports: [
    EmrResizableContainerModule,
    MchartLineComponent,
    MchartTooltipBodyComponent,
    MchartTooltipComponent,
    MchartTooltipTitleComponent
  ],
  templateUrl: './mchart-line-responsive-example.component.html',
  styleUrl: './mchart-line-responsive-example.component.scss'
})
export class MchartLineResponsiveExampleComponent {

}
