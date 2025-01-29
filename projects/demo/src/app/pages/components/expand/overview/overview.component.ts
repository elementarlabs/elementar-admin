import { Component } from '@angular/core';
import { PlaygroundComponent } from '@demo/meta/playground/playground.component';
import { BasicExpandExampleComponent } from '../_examples/basic-expand-example/basic-expand-example.component';
import { PageComponent } from '@demo/meta/page/page.component';
import { PageContentDirective } from '@demo/meta/page/page-content.directive';
import {
  ExpandShowButtonIfExpandedExampleComponent
} from '../_examples/expand-show-button-if-expanded-example/expand-show-button-if-expanded-example.component';
import {
  ExpandCustomButtonLabelsExampleComponent
} from '../_examples/expand-custom-button-labels-example/expand-custom-button-labels-example.component';
import { MatTab, MatTabGroup } from '@angular/material/tabs';

@Component({
  imports: [
    PlaygroundComponent,
    BasicExpandExampleComponent,
    PageComponent,
    PageContentDirective,
    ExpandShowButtonIfExpandedExampleComponent,
    ExpandCustomButtonLabelsExampleComponent,
    MatTab,
    MatTabGroup
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
