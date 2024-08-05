import { Component } from '@angular/core';
import { PlaygroundComponent } from '@demo/meta/playground/playground.component';
import { BasicPaginatorExampleComponent } from '../_examples/basic-paginator-example/basic-paginator-example.component';
import {
  ConfigurablePaginatorExampleComponent
} from '../_examples/configurable-paginator-example/configurable-paginator-example.component';
import { PageComponent } from '@demo/meta/page/page.component';
import { PageContentDirective } from '@demo/meta/page/page-content.directive';

@Component({
  selector: 'app-overview',
  standalone: true,
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
