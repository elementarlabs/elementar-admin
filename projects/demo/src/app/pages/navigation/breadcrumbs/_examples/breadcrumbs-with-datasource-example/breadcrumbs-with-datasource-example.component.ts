import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  BreadcrumbActiveItemDefDirective,
  BreadcrumbItemComponent,
  BreadcrumbItemDefDirective, BreadcrumbsComponent,
  BreadcrumbSeparatorComponent, BreadcrumbSeparatorDefDirective
} from '@elementar-ui/components/breadcrumbs';

@Component({
  selector: 'app-breadcrumbs-with-datasource-example',
  imports: [
    RouterLink,
    BreadcrumbSeparatorComponent,
    BreadcrumbItemComponent,
    BreadcrumbItemDefDirective,
    BreadcrumbSeparatorDefDirective,
    BreadcrumbActiveItemDefDirective,
    BreadcrumbsComponent
  ],
  templateUrl: './breadcrumbs-with-datasource-example.component.html',
  styleUrl: './breadcrumbs-with-datasource-example.component.scss'
})
export class BreadcrumbsWithDatasourceExampleComponent {
  dataSource = [
    {
      name: 'Home',
      link: '/'
    },
    {
      name: 'Breadcrumbs'
    }
  ];
}
