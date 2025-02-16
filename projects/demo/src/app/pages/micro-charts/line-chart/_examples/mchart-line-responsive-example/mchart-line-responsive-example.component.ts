import { Component } from '@angular/core';
import { ShuffleArrayPipe } from '@demo/meta/shuffle-array.pipe';
import {
  MchartLineComponent,
  MchartTooltipBodyComponent,
  MchartTooltipComponent, MchartTooltipTitleComponent
} from '@elementar-ui/components';
import { ResizableContainerComponent } from '@elementar-ui/components';

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
