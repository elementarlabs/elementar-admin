import { Component } from '@angular/core';
import { MchartLineComponent } from '@elementar-ui/components/micro-chart';
import { ShuffleArrayPipe } from '@meta/shuffle-array.pipe';

@Component({
  selector: 'app-mchart-line-basic-example',
  imports: [
    MchartLineComponent,
    ShuffleArrayPipe
  ],
  templateUrl: './mchart-line-basic-example.component.html',
  styleUrl: './mchart-line-basic-example.component.scss'
})
export class MchartLineBasicExampleComponent {

}
