import { Component, computed, effect, input } from '@angular/core';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef, MatRow, MatRowDef, MatTable
} from '@angular/material/table';
import { MatCheckbox } from '@angular/material/checkbox';
import { DataViewColumnDef } from '../types';
import { SelectionModel } from '@angular/cdk/collections';

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
  columnDefs = input<DataViewColumnDef[]>([]);
  data = input<T[]>([]);
  displayedColumns = computed((): string[] => {
    return this
      .columnDefs()
      .filter(colDef => colDef.visible)
      .map(colDef => colDef.dataField)
    ;
  });

  private _selection = new SelectionModel<T>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this._selection.selected.length;
    const numRows = this.data().length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this._selection.clear();
      return;
    }

    this._selection.select(...this.data());
  }

  // /** The label for the checkbox on the passed row */
  // checkboxLabel(row?: T): string {
  //   if (!row) {
  //     return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
  //   }
  //   return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  // }

  constructor() {
    effect(() => {
      console.log(333);
    });
  }
}
