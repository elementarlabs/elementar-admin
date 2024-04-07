import { Component } from '@angular/core';
import { PlaygroundComponent } from '@meta/playground/playground.component';
import { BasicDividerExampleComponent } from '../_examples/basic-divider-example/basic-divider-example.component';
import {
  DividerWithTextExampleComponent
} from '../_examples/divider-with-text-example/divider-with-text-example.component';

@Component({
  standalone: true,
  imports: [
    PlaygroundComponent,
    BasicDividerExampleComponent,
    DividerWithTextExampleComponent
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
