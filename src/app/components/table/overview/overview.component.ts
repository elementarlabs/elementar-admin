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
import { PageComponent } from '@meta/page/page.component';
import { PageContentDirective } from '@meta/page/page-content.directive';
import { SortableTableExampleComponent } from '../_examples/sortable-table-example/sortable-table-example.component';

@Component({
    selector: 'app-overview',
    imports: [
        PlaygroundComponent,
        BasicTableExampleComponent,
        TableWithPaginationExampleComponent,
        TableWithSortExampleComponent,
        TableWithFilteringExampleComponent,
        TableWithSelectionExampleComponent,
        TableWithFixedColumnsExampleComponent,
        TableWithStickyHeaderExampleComponent,
        TableWithStickyFooterExampleComponent,
        PageComponent,
        PageContentDirective,
        SortableTableExampleComponent
    ],
    templateUrl: './overview.component.html',
    styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
