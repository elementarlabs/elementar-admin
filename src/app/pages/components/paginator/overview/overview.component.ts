import { Component } from '@angular/core';
import { PlaygroundComponent } from '@meta/playground/playground.component';
import { BasicPaginatorExampleComponent } from '../_examples/basic-paginator-example/basic-paginator-example.component';
import {
  ConfigurablePaginatorExampleComponent
} from '../_examples/configurable-paginator-example/configurable-paginator-example.component';
import { PageComponent } from '@meta/page/page.component';
import { PageContentDirective } from '@meta/page/page-content.directive';

@Component({
    selector: 'app-overview',
    imports: [
        PlaygroundComponent,
        BasicPaginatorExampleComponent,
        ConfigurablePaginatorExampleComponent,
        PageComponent,
        PageContentDirective
    ],
    templateUrl: './overview.component.html',
    styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
