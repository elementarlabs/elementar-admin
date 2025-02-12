import { Component } from '@angular/core';
import { MchartBarComponent } from '@elementar-ui/components/micro-chart';
import { ShuffleArrayPipe } from '@demo/meta/shuffle-array.pipe';
import { ResizableContainerComponent } from '@elementar-ui/components/resizable-container';

@Component({
  selector: 'app-mchart-bar-responsive-example',
  imports: [
    MchartBarComponent,
    ShuffleArrayPipe,
    ResizableContainerComponent
  ],
  templateUrl: './mchart-bar-responsive-example.component.html',
  styleUrl: './mchart-bar-responsive-example.component.scss'
})
export class MchartBarResponsiveExampleComponent {

}
