import { Component } from '@angular/core';
import {
  BasicFilterBuilderExampleComponent
} from '../../filter-builder/_examples/basic-filter-builder-example/basic-filter-builder-example.component';
import { PageComponent } from '@meta/page/page.component';
import { PageContentDirective } from '@meta/page/page-content.directive';
import { PlaygroundComponent } from '@meta/playground/playground.component';
import {
  BasicImageViewerExampleComponent
} from '../_examples/basic-image-viewer-example/basic-image-viewer-example.component';

@Component({
  standalone: true,
  imports: [
    BasicFilterBuilderExampleComponent,
    PageComponent,
    PageContentDirective,
    PlaygroundComponent,
    BasicImageViewerExampleComponent
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
