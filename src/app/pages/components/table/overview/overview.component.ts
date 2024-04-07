import { Component } from '@angular/core';
import { BasicTableExampleComponent } from '../_examples/basic-table-example/basic-table-example.component';
import { PlaygroundComponent } from '@meta/playground/playground.component';
import {
  TableWithPaginationExampleComponent
} from '../_examples/table-with-pagination-example/table-with-pagination-example.component';
import { TableWithSortExampleComponent } from '../_examples/table-with-sort-example/table-with-sort-example.component';
import {
  TableWithFilteringExampleComponent
} from '../_examples/table-with-filtering-example/table-with-filtering-example.component';
import {
  TableWithSelectionExampleComponent
} from '../_examples/table-with-selection-example/table-with-selection-example.component';
import {
  TableWithFixedColumnsExampleComponent
} from '../_examples/table-with-fixed-columns-example/table-with-fixed-columns-example.component';
import {
  TableWithStickyHeaderExampleComponent
} from '../_examples/table-with-sticky-header-example/table-with-sticky-header-example.component';
import {
  TableWithStickyFooterExampleComponent
} from '../_examples/table-with-sticky-footer-example/table-with-sticky-footer-example.component';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [
    PlaygroundComponent,
    BasicTableExampleComponent,
    TableWithPaginationExampleComponent,
    TableWithSortExampleComponent,
    TableWithFilteringExampleComponent,
    TableWithSelectionExampleComponent,
    TableWithFixedColumnsExampleComponent,
    TableWithStickyHeaderExampleComponent,
    TableWithStickyFooterExampleComponent
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
