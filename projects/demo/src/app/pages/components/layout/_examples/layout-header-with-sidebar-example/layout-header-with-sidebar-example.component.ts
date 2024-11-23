import { Component } from '@angular/core';
import { LayoutBodyComponent } from '@elementar/components/layout';
import { LayoutComponent } from '@elementar/components/layout';
import { LayoutHeaderComponent } from '@elementar/components/layout';
import { LayoutSidebarComponent } from '@elementar/components/layout';

@Component({
    selector: 'app-layout-header-with-sidebar-example',
    imports: [
        LayoutBodyComponent,
        LayoutComponent,
        LayoutHeaderComponent,
        LayoutSidebarComponent
    ],
    templateUrl: './layout-header-with-sidebar-example.component.html',
    styleUrl: './layout-header-with-sidebar-example.component.scss'
})
export class LayoutHeaderWithSidebarExampleComponent {

}
