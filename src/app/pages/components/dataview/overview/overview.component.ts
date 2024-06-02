import { Component } from '@angular/core';
import { PageComponent } from '@meta/page/page.component';
import { PageContentDirective } from '@meta/page/page-content.directive';
import {
  BasicContentFadeExampleComponent
} from '../../content-fade/_examples/basic-content-fade-example/basic-content-fade-example.component';
import {
  ContentFadeCustomWidthExampleComponent
} from '../../content-fade/_examples/content-fade-custom-width-example/content-fade-custom-width-example.component';
import { PlaygroundComponent } from '@meta/playground/playground.component';
import { BasicDataviewExampleComponent } from '../_examples/basic-dataview-example/basic-dataview-example.component';
import {
  DataviewWithSelectionExampleComponent
} from '../_examples/dataview-with-selection-example/dataview-with-selection-example.component';
import {
  DataViewWithPaginationExampleComponent
} from '../_examples/data-view-with-pagination-example/data-view-with-pagination-example.component';
import {
  DataViewWithSortingExampleComponent
} from '../_examples/data-view-with-sorting-example/data-view-with-sorting-example.component';
import {
  DataViewHlHeaderExampleComponent
} from '../_examples/data-view-hl-header-example/data-view-hl-header-example.component';
import {
  DataViewCustomCellRenderersExampleComponent
} from '../_examples/data-view-custom-cell-renderers-example/data-view-custom-cell-renderers-example.component';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [
    PageComponent,
    PageContentDirective,
    BasicContentFadeExampleComponent,
    ContentFadeCustomWidthExampleComponent,
    PlaygroundComponent,
    BasicDataviewExampleComponent,
    DataviewWithSelectionExampleComponent,
    DataViewWithPaginationExampleComponent,
    DataViewWithSortingExampleComponent,
    DataViewHlHeaderExampleComponent,
    DataViewCustomCellRenderersExampleComponent
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
