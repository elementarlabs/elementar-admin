import { Component } from '@angular/core';
import { BreadcrumbItemIconDirective, EmrBreadcrumbsModule } from '@elementar/components/breadcrumbs';
import { MatIcon } from '@angular/material/icon';

@Component({
    selector: 'app-breadcrumbs-with-icons-example',
    imports: [
        EmrBreadcrumbsModule,
        MatIcon,
        BreadcrumbItemIconDirective
    ],
    templateUrl: './breadcrumbs-with-icons-example.component.html',
    styleUrl: './breadcrumbs-with-icons-example.component.scss'
})
export class BreadcrumbsWithIconsExampleComponent {

}
