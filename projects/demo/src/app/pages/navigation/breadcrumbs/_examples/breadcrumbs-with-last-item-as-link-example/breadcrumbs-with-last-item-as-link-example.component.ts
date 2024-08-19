import { Component } from '@angular/core';
import { BreadcrumbItemIconDirective, EmrBreadcrumbsModule } from '@elementar/components/breadcrumbs';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-breadcrumbs-with-last-item-as-link-example',
  standalone: true,
  imports: [
    EmrBreadcrumbsModule,
    BreadcrumbItemIconDirective,
    MatIcon
  ],
  templateUrl: './breadcrumbs-with-last-item-as-link-example.component.html',
  styleUrl: './breadcrumbs-with-last-item-as-link-example.component.scss'
})
export class BreadcrumbsWithLastItemAsLinkExampleComponent {

}
