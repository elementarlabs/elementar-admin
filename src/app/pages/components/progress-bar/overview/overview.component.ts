import { Component } from '@angular/core';
import { PlaygroundComponent } from '@meta/playground/playground.component';
import {
  BasicProgressBarExampleComponent
} from '../_examples/basic-progress-bar-example/basic-progress-bar-example.component';
import {
  IntermediateProgressBarExampleComponent
} from '../_examples/intermediate-progress-bar-example/intermediate-progress-bar-example.component';
import {
  BufferProgressBarExampleComponent
} from '../_examples/buffer-progress-bar-example/buffer-progress-bar-example.component';
import {
  QueryProgressBarExampleComponent
} from '../_examples/query-progress-bar-example/query-progress-bar-example.component';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [
    PlaygroundComponent,
    BasicProgressBarExampleComponent,
    IntermediateProgressBarExampleComponent,
    BufferProgressBarExampleComponent,
    QueryProgressBarExampleComponent
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
