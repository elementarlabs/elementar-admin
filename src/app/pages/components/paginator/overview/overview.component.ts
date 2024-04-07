import { Component } from '@angular/core';
import { PlaygroundComponent } from '@meta/playground/playground.component';
import { BasicPaginatorExampleComponent } from '../_examples/basic-paginator-example/basic-paginator-example.component';
import {
  ConfigurablePaginatorExampleComponent
} from '../_examples/configurable-paginator-example/configurable-paginator-example.component';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [
    PlaygroundComponent,
    BasicPaginatorExampleComponent,
    ConfigurablePaginatorExampleComponent
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
