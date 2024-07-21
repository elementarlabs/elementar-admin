import { Component } from '@angular/core';
import { EmrAvatarModule } from '@elementar/components/avatar';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef, MatRow, MatRowDef, MatTable, MatTableDataSource
} from '@angular/material/table';
import { MatCheckbox } from '@angular/material/checkbox';
import { SelectionModel } from '@angular/cdk/collections';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDragHandle,
  CdkDragPlaceholder,
  CdkDropList,
  moveItemInArray
} from '@angular/cdk/drag-drop';

export interface TodoTask {
  name: string;
  position: number;
  assignee: {
    name: string
  };
  priority: {
    id: string,
    name: string
  };
}

const DATA: TodoTask[] = [
  { position: 1, name: 'Hydrogen', assignee: { name: 'Me' }, priority: { id: 'high', name: 'High' } },
  { position: 2, name: 'Helium', assignee: { name: 'Me' }, priority: { id: 'medium', name: 'Medium' } },
  { position: 3, name: 'Lithium', assignee: { name: 'Me' }, priority: { id: 'low', name: 'Low' } },
  { position: 4, name: 'Beryllium', assignee: { name: 'Me' }, priority: { id: 'medium', name: 'Medium' } },
  { position: 5, name: 'Beryllium', assignee: { name: 'Me' }, priority: { id: 'medium', name: 'Medium' } },
  { position: 6, name: 'Beryllium', assignee: { name: 'Me' }, priority: { id: 'low', name: 'Low' } }
];

@Component({
  selector: 'app-todos-widget',
  standalone: true,
  imports: [
    EmrAvatarModule,
    MatButton,
    MatIcon,
    MatIconButton,
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
    CdkDropList,
    CdkDrag,
    CdkDragHandle,
    CdkDragPlaceholder
  ],
  templateUrl: './todos-widget.component.html',
  styleUrl: './todos-widget.component.scss'
})
export class TodosWidgetComponent {
  displayedColumns: string[] = ['drag', 'select', 'position', 'name', 'assignee', 'priority'];
  dataSource = new MatTableDataSource<TodoTask>(DATA);
  selection = new SelectionModel<TodoTask>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: TodoTask): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  drop(event: CdkDragDrop<TodoTask[]>) {
    const data = this.dataSource.data;
    moveItemInArray(data, event.previousIndex, event.currentIndex);
    this.dataSource.data = data;
  }
}
