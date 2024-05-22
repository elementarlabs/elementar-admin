import { Component } from '@angular/core';
import { MchartLineComponent, MchartPieComponent } from '@elementar/components';
import { ShuffleArrayPipe } from '@meta/shuffle-array.pipe';

@Component({
  selector: 'app-mchart-pie-basic-example',
  standalone: true,
  imports: [
    MchartPieComponent,
    MchartLineComponent,
    ShuffleArrayPipe
  ],
  templateUrl: './mchart-pie-basic-example.component.html',
  styleUrl: './mchart-pie-basic-example.component.scss'
})
export class MchartPieBasicExampleComponent {

}
