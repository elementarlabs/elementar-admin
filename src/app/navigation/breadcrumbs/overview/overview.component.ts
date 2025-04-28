import { Component } from '@angular/core';
import { PlaygroundComponent } from '@meta/playground/playground.component';
import {
  BasicBreadcrumbsExampleComponent
} from '../_examples/basic-breadcrumbs-example/basic-breadcrumbs-example.component';
import {
  BreadcrumbsWithDatasourceExampleComponent
} from '../_examples/breadcrumbs-with-datasource-example/breadcrumbs-with-datasource-example.component';
import {
  BreadcrumbsWithIconsExampleComponent
} from '../_examples/breadcrumbs-with-icons-example/breadcrumbs-with-icons-example.component';
import {
  BreadcrumbsWithTitlesExampleComponent
} from '../_examples/breadcrumbs-with-titles-example/breadcrumbs-with-titles-example.component';
import { PageComponent } from '@meta/page/page.component';
import { PageContentDirective } from '@meta/page/page-content.directive';
import {
  BreadcrumbsWithLastItemAsLinkExampleComponent
} from '../_examples/breadcrumbs-with-last-item-as-link-example/breadcrumbs-with-last-item-as-link-example.component';
import {
  BreadcrumbsGlobalExampleComponent
} from '../_examples/breadcrumbs-global-example/breadcrumbs-global-example.component';

@Component({
  imports: [
    PlaygroundComponent,
    BasicBreadcrumbsExampleComponent,
    BreadcrumbsWithDatasourceExampleComponent,
    BreadcrumbsWithIconsExampleComponent,
    BreadcrumbsWithTitlesExampleComponent,
    PageComponent,
    PageContentDirective,
    BreadcrumbsWithLastItemAsLinkExampleComponent,
    BreadcrumbsGlobalExampleComponent
  ],
    templateUrl: './overview.component.html',
    styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
