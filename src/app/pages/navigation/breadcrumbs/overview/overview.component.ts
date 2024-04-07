import { Component } from '@angular/core';
import { PlaygroundComponent } from '@meta/playground/playground.component';
import {
  BasicBreadcrumbsExampleComponent
} from '../_examples/basic-breadcrumbs-example/basic-breadcrumbs-example.component';
import {
  BreadcrumbsWithDatasourceExampleComponent
} from '../_examples/breadcrumbs-with-datasource-example/breadcrumbs-with-datasource-example.component';

@Component({
  standalone: true,
  imports: [
    PlaygroundComponent,
    BasicBreadcrumbsExampleComponent,
    BreadcrumbsWithDatasourceExampleComponent
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
