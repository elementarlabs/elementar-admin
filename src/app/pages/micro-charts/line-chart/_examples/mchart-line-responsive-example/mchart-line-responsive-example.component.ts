import { Component } from '@angular/core';
import { ShuffleArrayPipe } from '@meta/shuffle-array.pipe';
import { EmrResizableContainerModule } from '@elementar/components/resizable-container';
import {
  MchartLineComponent,
  MchartTooltipBodyComponent,
  MchartTooltipComponent, MchartTooltipTitleComponent
} from '@elementar/components/micro-chart';

@Component({
  selector: 'app-mchart-line-responsive-example',
  standalone: true,
  imports: [
    EmrResizableContainerModule,
    MchartLineComponent,
    MchartTooltipBodyComponent,
    MchartTooltipComponent,
    MchartTooltipTitleComponent,
    ShuffleArrayPipe
  ],
  templateUrl: './mchart-line-responsive-example.component.html',
  styleUrl: './mchart-line-responsive-example.component.scss'
})
export class MchartLineResponsiveExampleComponent {

}
