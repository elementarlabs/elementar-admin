import { Component } from '@angular/core';
import { PlaygroundComponent } from '@meta/playground/playground.component';
import { BasicListExampleComponent } from '../_examples/basic-list-example/basic-list-example.component';
import {
  ListWithSectionsExampleComponent
} from '../_examples/list-with-sections-example/list-with-sections-example.component';
import {
  ListWithSelectionExampleComponent
} from '../_examples/list-with-selection-example/list-with-selection-example.component';
import {
  ListWithSingleSelectionExampleComponent
} from '../_examples/list-with-single-selection-example/list-with-single-selection-example.component';
import { ListVariantsExampleComponent } from '../_examples/list-variants-example/list-variants-example.component';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [
    PlaygroundComponent,
    BasicListExampleComponent,
    ListWithSectionsExampleComponent,
    ListWithSelectionExampleComponent,
    ListWithSingleSelectionExampleComponent,
    ListVariantsExampleComponent
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
