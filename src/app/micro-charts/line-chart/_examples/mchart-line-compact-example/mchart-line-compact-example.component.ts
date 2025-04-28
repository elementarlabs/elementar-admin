import { Component } from '@angular/core';
import { MchartLineComponent } from '@elementar-ui/components/micro-chart';
import { ShuffleArrayPipe } from '@meta/shuffle-array.pipe';

@Component({
  selector: 'app-mchart-line-compact-example',
  imports: [
    MchartLineComponent,
    ShuffleArrayPipe
  ],
  templateUrl: './mchart-line-compact-example.component.html',
  styleUrl: './mchart-line-compact-example.component.scss'
})
export class MchartLineCompactExampleComponent {

}
