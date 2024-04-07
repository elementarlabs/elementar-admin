import { Component } from '@angular/core';
import {
  BasicDividerExampleComponent
} from '../../divider/_examples/basic-divider-example/basic-divider-example.component';
import {
  DividerWithTextExampleComponent
} from '../../divider/_examples/divider-with-text-example/divider-with-text-example.component';
import { PlaygroundComponent } from '@meta/playground/playground.component';
import {
  BasicSuggestionsExampleComponent
} from '../_examples/basic-suggestions-example/basic-suggestions-example.component';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [
    BasicDividerExampleComponent,
    DividerWithTextExampleComponent,
    PlaygroundComponent,
    BasicSuggestionsExampleComponent
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
