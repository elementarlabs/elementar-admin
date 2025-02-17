import { Component } from '@angular/core';
import { MchartBarComponent } from '@elementar-ui/components';
import { ShuffleArrayPipe } from '@meta/shuffle-array.pipe';
import { ResizableContainerComponent } from '@elementar-ui/components';

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
