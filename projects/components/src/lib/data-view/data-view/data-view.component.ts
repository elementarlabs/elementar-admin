import { booleanAttribute, Component, computed, effect, input, output } from '@angular/core';
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
import {
  PeriodicElement
} from '../../../../../../src/app/pages/components/table/_examples/table-with-pagination-example/table-with-pagination-example.component';

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
    MatHeaderCellDef
  ],
  templateUrl: './data-view.component.html',
  styleUrl: './data-view.component.scss'
})
export class DataViewComponent<T> {
  paginator = input<MatPaginator>();
  columnDefs = input<DataViewColumnDef[]>([]);
  data = input<T[]>([]);
  withSelection = input(false, {
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

    return dataSource;
  });

  protected selection = new SelectionModel<T>(true, []);

  readonly rowSelectionChanged = output<DataViewRowSelectionEvent<T>>();
  readonly selectionChanged = output<T[]>();
  readonly allRowsSelectionChanged = output<boolean>();

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

  constructor() {
    effect(() => {
      // console.log(333);
    });
  }
}
