import { Component } from '@angular/core';
import { MchartLineComponent } from '@elementar/components';
import { ShuffleArrayPipe } from '@meta/shuffle-array.pipe';

@Component({
  selector: 'app-mchart-line-basic-example',
  standalone: true,
  imports: [
    MchartLineComponent,
    ShuffleArrayPipe
  ],
  templateUrl: './mchart-line-basic-example.component.html',
  styleUrl: './mchart-line-basic-example.component.scss'
})
export class MchartLineBasicExampleComponent {

}
