import { Component } from '@angular/core';
import { PlaygroundComponent } from '@demo/meta/playground/playground.component';
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
import { PageComponent } from '@demo/meta/page/page.component';
import { PageContentDirective } from '@demo/meta/page/page-content.directive';

@Component({
    selector: 'app-overview',
    imports: [
        PlaygroundComponent,
        BasicListExampleComponent,
        ListWithSectionsExampleComponent,
        ListWithSelectionExampleComponent,
        ListWithSingleSelectionExampleComponent,
        ListVariantsExampleComponent,
        PageComponent,
        PageContentDirective
    ],
    templateUrl: './overview.component.html',
    styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
