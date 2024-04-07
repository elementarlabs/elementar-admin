import { Component } from '@angular/core';
import { PlaygroundComponent } from '@meta/playground/playground.component';
import {
  BasicProgressSpinnerExampleComponent
} from '../_examples/basic-progress-spinner-example/basic-progress-spinner-example.component';
import {
  ConfigurableSpinnerExampleComponent
} from '../_examples/configurable-spinner-example/configurable-spinner-example.component';

@Component({
  standalone: true,
  imports: [
    PlaygroundComponent,
    BasicProgressSpinnerExampleComponent,
    ConfigurableSpinnerExampleComponent
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
