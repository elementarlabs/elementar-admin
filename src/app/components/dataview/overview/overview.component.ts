import { Component } from '@angular/core';
import { PageComponent } from '@meta/page/page.component';
import { PageContentDirective } from '@meta/page/page-content.directive';
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
import {
  DataViewWithActionBarExampleComponent
} from '../_examples/data-view-with-action-bar-example/data-view-with-action-bar-example.component';
import {
  DataViewFilterDataExampleComponent
} from '../_examples/data-view-filter-data-example/data-view-filter-data-example.component';
import {
  DataViewLoadingStateExampleComponent
} from '../_examples/data-view-loading-state-example/data-view-loading-state-example.component';

@Component({
  selector: 'app-overview',
  imports: [
    PageComponent,
    PageContentDirective,
    PlaygroundComponent,
    BasicDataviewExampleComponent,
    DataviewWithSelectionExampleComponent,
    DataViewWithPaginationExampleComponent,
    DataViewWithSortingExampleComponent,
    DataViewHlHeaderExampleComponent,
    DataViewCustomCellRenderersExampleComponent,
    DataViewWithActionBarExampleComponent,
    DataViewFilterDataExampleComponent,
    DataViewLoadingStateExampleComponent
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
