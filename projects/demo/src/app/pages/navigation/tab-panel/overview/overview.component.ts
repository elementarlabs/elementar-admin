import { Component } from '@angular/core';
import { PlaygroundComponent } from '@demo/meta/playground/playground.component';
import {
  TabPanelWithPanelsInsideExampleComponent
} from '../_examples/tab-panel-with-panels-inside-example/tab-panel-with-panels-inside-example.component';
import { BasicTabPanelExampleComponent } from '../_examples/basic-tab-panel-example/basic-tab-panel-example.component';
import { PageComponent } from '@demo/meta/page/page.component';
import { PageContentDirective } from '@demo/meta/page/page-content.directive';
import {
  TabPanelCompactExampleComponent
} from '../_examples/tab-panel-compact-example/tab-panel-compact-example.component';

@Component({
    selector: 'app-overview',
    imports: [
        PlaygroundComponent,
        TabPanelWithPanelsInsideExampleComponent,
        BasicTabPanelExampleComponent,
        PageComponent,
        PageContentDirective,
        TabPanelCompactExampleComponent
    ],
    templateUrl: './overview.component.html',
    styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
