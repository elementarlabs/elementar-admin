import { Component } from '@angular/core';

@Component({
    selector: 'emr-breadcrumb-separator',
    exportAs: 'emrBreadcrumbSeparator',
    templateUrl: './breadcrumb-separator.component.html',
    styleUrls: ['./breadcrumb-separator.component.scss'],
    host: {
        class: 'emr-breadcrumb-separator'
    },
    standalone: false
})
export class BreadcrumbSeparatorComponent {
}
