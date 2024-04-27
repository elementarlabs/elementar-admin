import { Component } from '@angular/core';
import { BreadcrumbItemIconDirective, BreadcrumbTitleComponent, EmrBreadcrumbsModule } from '@elementar/components';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-breadcrumbs-with-titles-example',
  standalone: true,
  imports: [
    BreadcrumbItemIconDirective,
    EmrBreadcrumbsModule,
    MatIcon,
    BreadcrumbTitleComponent
  ],
  templateUrl: './breadcrumbs-with-titles-example.component.html',
  styleUrl: './breadcrumbs-with-titles-example.component.scss'
})
export class BreadcrumbsWithTitlesExampleComponent {

}
