import { Component } from '@angular/core';
import { PlaygroundComponent } from '@meta/playground/playground.component';
import {
  TabPanelWithPanelsInsideExampleComponent
} from '../_examples/tab-panel-with-panels-inside-example/tab-panel-with-panels-inside-example.component';
import { BasicTabPanelExampleComponent } from '../_examples/basic-tab-panel-example/basic-tab-panel-example.component';
import { PageComponent } from '@meta/page/page.component';
import { PageContentDirective } from '@meta/page/page-content.directive';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [
    PlaygroundComponent,
    TabPanelWithPanelsInsideExampleComponent,
    BasicTabPanelExampleComponent,
    PageComponent,
    PageContentDirective
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
