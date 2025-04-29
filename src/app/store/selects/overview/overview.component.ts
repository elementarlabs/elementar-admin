import { Component } from '@angular/core';
import {
  WorkspaceSelectExampleComponent
} from '../_examples/workspace-select-example/workspace-select-example.component';
import { PageComponent } from '../../../_meta/page/page.component';
import { PageContentDirective } from '../../../_meta/page/page-content.directive';
import { PlaygroundComponent } from '../../../_meta/playground/playground.component';

@Component({
  imports: [
    PageComponent,
    PageContentDirective,
    PlaygroundComponent,
    WorkspaceSelectExampleComponent
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
