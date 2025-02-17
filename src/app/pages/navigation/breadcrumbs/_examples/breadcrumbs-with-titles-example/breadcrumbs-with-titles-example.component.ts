import { Component } from '@angular/core';
import {
  BreadcrumbItemComponent,
  BreadcrumbItemIconDirective, BreadcrumbsComponent, BreadcrumbSeparatorComponent,
  BreadcrumbTitleComponent
} from '@elementar-ui/components';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-breadcrumbs-with-titles-example',
  imports: [
    BreadcrumbItemIconDirective,
    MatIcon,
    BreadcrumbTitleComponent,
    BreadcrumbSeparatorComponent,
    BreadcrumbItemComponent,
    BreadcrumbsComponent
  ],
  templateUrl: './breadcrumbs-with-titles-example.component.html',
  styleUrl: './breadcrumbs-with-titles-example.component.scss'
})
export class BreadcrumbsWithTitlesExampleComponent {

}
