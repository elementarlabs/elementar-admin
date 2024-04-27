import { Component } from '@angular/core';

@Component({
  selector: 'emr-breadcrumb-active-item',
  exportAs: 'emrBreadcrumbActiveItem',
  templateUrl: './breadcrumb-active-item.component.html',
  styleUrls: ['./breadcrumb-active-item.component.scss'],
  host: {
    'class': 'emr-breadcrumb-active-item'
  }
})
export class BreadcrumbActiveItemComponent {
}
