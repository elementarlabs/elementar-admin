import { Component } from '@angular/core';
import { MchartBarComponent } from '@elementar/components/micro-chart';
import { ShuffleArrayPipe } from '@meta/shuffle-array.pipe';
import { EmrResizableContainerModule } from '@elementar/components/resizable-container';

@Component({
  selector: 'app-mchart-bar-responsive-example',
  standalone: true,
  imports: [
    MchartBarComponent,
    ShuffleArrayPipe,
    EmrResizableContainerModule
  ],
  templateUrl: './mchart-bar-responsive-example.component.html',
  styleUrl: './mchart-bar-responsive-example.component.scss'
})
export class MchartBarResponsiveExampleComponent {

}
