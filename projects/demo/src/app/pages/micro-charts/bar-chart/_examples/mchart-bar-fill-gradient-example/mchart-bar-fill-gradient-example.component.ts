import { Component } from '@angular/core';
import { MchartBarComponent } from '@elementar/components/micro-chart';
import { ShuffleArrayPipe } from '@demo/meta/shuffle-array.pipe';

@Component({
  selector: 'app-mchart-bar-fill-gradient-example',
  standalone: true,
  imports: [
    MchartBarComponent,
    ShuffleArrayPipe
  ],
  templateUrl: './mchart-bar-fill-gradient-example.component.html',
  styleUrl: './mchart-bar-fill-gradient-example.component.scss'
})
export class MchartBarFillGradientExampleComponent {

}
