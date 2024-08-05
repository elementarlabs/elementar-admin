import { Component } from '@angular/core';
import { MchartLineComponent } from '@elementar/components/micro-chart';
import { ShuffleArrayPipe } from '@demo/meta/shuffle-array.pipe';

@Component({
  selector: 'app-mchart-line-with-markers-example',
  standalone: true,
  imports: [
    MchartLineComponent,
    ShuffleArrayPipe
  ],
  templateUrl: './mchart-line-with-markers-example.component.html',
  styleUrl: './mchart-line-with-markers-example.component.scss'
})
export class MchartLineWithMarkersExampleComponent {

}
