import { Component } from '@angular/core';
import { MchartBarComponent } from '@elementar-ui/components/micro-chart';
import { ShuffleArrayPipe } from '@meta/shuffle-array.pipe';

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
