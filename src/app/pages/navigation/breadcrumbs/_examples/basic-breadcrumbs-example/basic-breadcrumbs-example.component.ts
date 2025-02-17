import { Component } from '@angular/core';
import {
  BreadcrumbItemComponent,
  BreadcrumbsComponent,
  BreadcrumbSeparatorComponent
} from '@elementar-ui/components';

@Component({
  selector: 'app-basic-breadcrumbs-example',
  imports: [
    BreadcrumbSeparatorComponent,
    BreadcrumbItemComponent,
    BreadcrumbsComponent
  ],
  templateUrl: './basic-breadcrumbs-example.component.html',
  styleUrl: './basic-breadcrumbs-example.component.scss'
})
export class BasicBreadcrumbsExampleComponent {

}
