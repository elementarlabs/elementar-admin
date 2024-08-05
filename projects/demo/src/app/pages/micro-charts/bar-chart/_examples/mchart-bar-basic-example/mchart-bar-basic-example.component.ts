import { Component } from '@angular/core';
import { MchartBarComponent, MchartLineComponent } from '@elementar/components/micro-chart';
import { ShuffleArrayPipe } from '@meta/shuffle-array.pipe';

@Component({
  selector: 'app-mchart-bar-basic-example',
  standalone: true,
  imports: [
    MchartBarComponent,
    MchartLineComponent,
    ShuffleArrayPipe
  ],
  templateUrl: './mchart-bar-basic-example.component.html',
  styleUrl: './mchart-bar-basic-example.component.scss'
})
export class MchartBarBasicExampleComponent {

}
