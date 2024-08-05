import { Component } from '@angular/core';
import { PlaygroundComponent } from '@demo/meta/playground/playground.component';
import {
  BasicExpansionPanelExampleComponent
} from '../_examples/basic-expansion-panel-example/basic-expansion-panel-example.component';
import {
  ExpansionPanelExpandCollapseTogglesExampleComponent
} from '../_examples/expansion-panel-expand-collapse-toggles-example/expansion-panel-expand-collapse-toggles-example.component';
import {
  ExpansionPanelAsAccordionExampleComponent
} from '../_examples/expansion-panel-as-accordion-example/expansion-panel-as-accordion-example.component';
import { PageComponent } from '@demo/meta/page/page.component';
import { PageContentDirective } from '@demo/meta/page/page-content.directive';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [
    PlaygroundComponent,
    BasicExpansionPanelExampleComponent,
    ExpansionPanelExpandCollapseTogglesExampleComponent,
    ExpansionPanelAsAccordionExampleComponent,
    PageComponent,
    PageContentDirective
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
