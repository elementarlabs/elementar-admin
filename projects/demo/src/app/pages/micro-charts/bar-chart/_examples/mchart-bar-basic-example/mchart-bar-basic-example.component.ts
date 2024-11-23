import { Component } from '@angular/core';
import { MchartBarComponent } from '@elementar/components/micro-chart';
import { ShuffleArrayPipe } from '@demo/meta/shuffle-array.pipe';

@Component({
  selector: 'app-mchart-bar-basic-example',
  imports: [
      MchartBarComponent,
      ShuffleArrayPipe
  ],
  templateUrl: './mchart-bar-basic-example.component.html',
  styleUrl: './mchart-bar-basic-example.component.scss'
})
export class MchartBarBasicExampleComponent {

}
