import { Component } from '@angular/core';
import { LayoutBodyComponent } from '@elementar/components/layout';
import { LayoutComponent } from '@elementar/components/layout';
import { LayoutHeaderComponent } from '@elementar/components/layout';
import { LayoutSidebarComponent } from '@elementar/components/layout';
import { LayoutFooterComponent } from '@elementar/components/layout';
import { LayoutTopbarComponent } from '@elementar/components/layout';
import { MatIcon } from '@angular/material/icon';
import { EmrAnnouncementModule } from '@elementar/components/announcement';

@Component({
    selector: 'app-layout-with-nested-layouts-example',
    imports: [
        LayoutBodyComponent,
        LayoutComponent,
        LayoutHeaderComponent,
        LayoutSidebarComponent,
        LayoutFooterComponent,
        LayoutTopbarComponent,
        MatIcon,
        EmrAnnouncementModule
    ],
    templateUrl: './layout-with-nested-layouts-example.component.html',
    styleUrl: './layout-with-nested-layouts-example.component.scss'
})
export class LayoutWithNestedLayoutsExampleComponent {

}
