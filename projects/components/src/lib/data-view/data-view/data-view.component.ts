import { booleanAttribute, Component, computed, input, output, viewChild } from '@angular/core';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef, MatRow, MatRowDef, MatTable, MatTableDataSource
} from '@angular/material/table';
import { MatCheckbox, MatCheckboxChange } from '@angular/material/checkbox';
import { DataViewColumnDef, DataViewRowSelectionEvent } from '../types';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortHeader, Sort } from '@angular/material/sort';

@Component({
  selector: 'emr-data-view',
  exportAs: 'emrDataView',
  standalone: true,
  imports: [
    MatCell,
    MatCellDef,
    MatCheckbox,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef,
    MatTable,
    MatHeaderCellDef,
    MatSort,
    MatSortHeader
  ],
  templateUrl: './data-view.component.html',
  styleUrl: './data-view.component.scss',
  host: {
    'class': 'emr-data-view',
    '[class.highlight-header]': 'highlightHeader()'
  }
})
export class DataViewComponent<T> {
  private _matTable = viewChild<MatTable<T>>('table');
  private _matSort = viewChild<MatSort>(MatSort);

  paginator = input<MatPaginator>();
  columnDefs = input<DataViewColumnDef[]>([]);
  data = input<T[]>([]);
  withSelection = input(false, {
    transform: booleanAttribute
  });
  highlightHeader = input(false, {
    transform: booleanAttribute
  });
  withSorting = input(false, {
    transform: booleanAttribute
  });
  stickyHeader = input(false, {
    transform: booleanAttribute
  });
  displayedColumns = computed((): string[] => {
    const displayedColumns = this
      .columnDefs()
      .filter(colDef => colDef.visible)
      .map(colDef => colDef.dataField)
    ;

    if (this.withSelection()) {
      displayedColumns.unshift('selection');
    }

    return displayedColumns;
  });
  dataSource = computed((): MatTableDataSource<T> => {
    const dataSource = new MatTableDataSource<T>(this.data());

    if (this.paginator()) {
      dataSource.paginator = this.paginator() as MatPaginator;
    }

    if (this.withSorting()) {
      dataSource.sort = this._matSort() as MatSort;
    }

    return dataSource;
  });

  protected selection = new SelectionModel<T>(true, []);

  readonly rowSelectionChanged = output<DataViewRowSelectionEvent<T>>();
  readonly selectionChanged = output<T[]>();
  readonly allRowsSelectionChanged = output<boolean>();
  readonly sortChanged = output<Sort>();

  get matTable(): MatTable<T> {
    return this._matTable() as MatTable<T>;
  }

  get matSort(): MatSort {
    return this._matSort() as MatSort;
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected(): boolean {
    const numSelected = this.selection.selected.length;
    const numRows = this.data().length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows(): void {
    if (this.isAllSelected()) {
      this.selection.clear();
      this.selectionChanged.emit([]);
      this.allRowsSelectionChanged.emit(false);
      return;
    }

    this.selection.select(...this.data());
    this.selectionChanged.emit(this.data());
    this.allRowsSelectionChanged.emit(true);
  }

  rowSelectionToggle(event: MatCheckboxChange, row: T): void {
    if (event.checked) {
      this.selection.select(row);
    } else {
      this.selection.deselect(row);
    }

    this.rowSelectionChanged.emit({
      matCheckboxChange: event,
      row,
      checked: event.checked
    });
    this.selectionChanged.emit(this.selection.selected);
  }

  protected sortChange(event: Sort) {
    this.sortChanged.emit(event);
  }
}
