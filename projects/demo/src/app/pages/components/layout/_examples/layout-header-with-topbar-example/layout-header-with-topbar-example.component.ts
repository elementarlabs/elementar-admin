import { Component } from '@angular/core';
import { LayoutBodyComponent } from '@elementar/components/layout';
import { LayoutComponent } from '@elementar/components/layout';
import { LayoutHeaderComponent } from '@elementar/components/layout';
import { MatIcon } from '@angular/material/icon';
import { LayoutTopbarComponent } from '@elementar/components/layout';
import { EmrAnnouncementModule } from '@elementar/components/announcement';

@Component({
    selector: 'app-layout-header-with-topbar-example',
    imports: [
        LayoutBodyComponent,
        LayoutComponent,
        LayoutHeaderComponent,
        LayoutTopbarComponent,
        MatIcon,
        EmrAnnouncementModule
    ],
    templateUrl: './layout-header-with-topbar-example.component.html',
    styleUrl: './layout-header-with-topbar-example.component.scss'
})
export class LayoutHeaderWithTopbarExampleComponent {

}
