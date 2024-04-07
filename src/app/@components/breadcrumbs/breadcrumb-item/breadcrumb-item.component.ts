import { Component } from '@angular/core';

@Component({
  selector: 'emr-breadcrumb-item,[emr-breadcrumb-item]',
  exportAs: 'emrBreadcrumbItem',
  templateUrl: './breadcrumb-item.component.html',
  styleUrls: ['./breadcrumb-item.component.css'],
  host: {
    class: 'emr-breadcrumb-item'
  }
})
export class BreadcrumbItemComponent {
}
