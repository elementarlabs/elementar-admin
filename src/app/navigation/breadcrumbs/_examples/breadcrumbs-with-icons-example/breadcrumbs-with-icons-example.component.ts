import { Component } from '@angular/core';
import {
  BreadcrumbItemComponent,
  BreadcrumbItemIconDirective, BreadcrumbsComponent,
  BreadcrumbSeparatorComponent
} from '@elementar-ui/components/breadcrumbs';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-breadcrumbs-with-icons-example',
  imports: [
    MatIcon,
    BreadcrumbItemIconDirective,
    BreadcrumbItemComponent,
    BreadcrumbSeparatorComponent,
    BreadcrumbsComponent
  ],
  templateUrl: './breadcrumbs-with-icons-example.component.html',
  styleUrl: './breadcrumbs-with-icons-example.component.scss'
})
export class BreadcrumbsWithIconsExampleComponent {

}
