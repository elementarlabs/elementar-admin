import { Directive } from '@angular/core';

@Directive({
  selector: '[emrBreadcrumbItemIcon]',
  exportAs: 'emrBreadcrumbItemIcon',
  standalone: true,
  host: {
    'class': 'emr-breadcrumb-item-icon'
  }
})
export class BreadcrumbItemIconDirective {
}
