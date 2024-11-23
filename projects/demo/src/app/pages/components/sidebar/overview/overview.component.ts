import { Component } from '@angular/core';
import { BasicSidebarExampleComponent } from '../_examples/basic-sidebar-example/basic-sidebar-example.component';
import { PageContentDirective } from '@demo/meta/page/page-content.directive';
import { PlaygroundComponent } from '@demo/meta/playground/playground.component';
import { PageComponent } from '@demo/meta/page/page.component';
import { SidebarCompactExampleComponent } from '../_examples/sidebar-compact-example/sidebar-compact-example.component';

@Component({
    imports: [
        BasicSidebarExampleComponent,
        PageContentDirective,
        PlaygroundComponent,
        PageComponent,
        SidebarCompactExampleComponent
    ],
    templateUrl: './overview.component.html',
    styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
