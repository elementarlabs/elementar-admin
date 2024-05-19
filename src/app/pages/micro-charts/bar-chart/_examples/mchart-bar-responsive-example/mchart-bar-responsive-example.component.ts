import { Component } from '@angular/core';
import { EmrResizableContainerModule, MchartBarComponent } from '@elementar/components';
import { ShuffleArrayPipe } from '@meta/shuffle-array.pipe';

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
