import { Component } from '@angular/core';
import { ShuffleArrayPipe } from '@demo/meta/shuffle-array.pipe';
import {
  MchartLineComponent,
  MchartTooltipBodyComponent,
  MchartTooltipComponent, MchartTooltipTitleComponent
} from '@elementar/components/micro-chart';
import { ResizableContainerComponent } from '@elementar/components/resizable-container';

@Component({
  selector: 'app-mchart-line-responsive-example',
  imports: [
    MchartLineComponent,
    MchartTooltipBodyComponent,
    MchartTooltipComponent,
    MchartTooltipTitleComponent,
    ShuffleArrayPipe,
    ResizableContainerComponent
  ],
  templateUrl: './mchart-line-responsive-example.component.html',
  styleUrl: './mchart-line-responsive-example.component.scss'
})
export class MchartLineResponsiveExampleComponent {

}
