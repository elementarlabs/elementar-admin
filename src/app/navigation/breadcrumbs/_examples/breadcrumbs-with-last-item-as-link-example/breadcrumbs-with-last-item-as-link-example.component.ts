import { Component } from '@angular/core';
import {
  BreadcrumbItemComponent,
  BreadcrumbItemIconDirective, BreadcrumbsComponent,
  BreadcrumbSeparatorComponent
} from '@elementar-ui/components/breadcrumbs';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-breadcrumbs-with-last-item-as-link-example',
  imports: [
    BreadcrumbItemIconDirective,
    MatIcon,
    BreadcrumbItemComponent,
    BreadcrumbSeparatorComponent,
    BreadcrumbsComponent
  ],
  templateUrl: './breadcrumbs-with-last-item-as-link-example.component.html',
  styleUrl: './breadcrumbs-with-last-item-as-link-example.component.scss'
})
export class BreadcrumbsWithLastItemAsLinkExampleComponent {

}
