import { Component, viewChild } from '@angular/core';
import { CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatTable, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  quantity: number;
}

export const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', quantity: 100 },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', quantity: 100 },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', quantity: 100 },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', quantity: 100 },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B', quantity: 100 },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', quantity: 100 },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', quantity: 100 },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', quantity: 100 },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', quantity: 100 },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', quantity: 100 },
];

@Component({
  selector: 'app-sortable-table-example',
  imports: [
    CdkDropList,
    CdkDrag,
    MatTableModule,
    MatIconModule
  ],
  templateUrl: './sortable-table-example.component.html',
  styleUrl: './sortable-table-example.component.scss'
})
export class SortableTableExampleComponent {
  readonly table = viewChild.required<MatTable<PeriodicElement>>('table');

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'quantity'];
  dataSource = ELEMENT_DATA;

  drop(event: CdkDragDrop<string>) {
    const previousIndex = this.dataSource.findIndex(d => d === event.item.data);
    moveItemInArray(this.dataSource, previousIndex, event.currentIndex);
    this.table().renderRows();
  }
}
