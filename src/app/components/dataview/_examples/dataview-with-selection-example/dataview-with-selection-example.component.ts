import { Component, model } from '@angular/core';
import { DataViewColumnDef, DataViewComponent, DataViewRowSelectionEvent } from '@elementar-ui/components/data-view';
import { JsonPipe } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
];

@Component({
  selector: 'app-dataview-with-selection-example',
  imports: [
    DataViewComponent,
    JsonPipe,
    MatButton,
    MatRadioButton,
    MatRadioGroup,
    FormsModule
  ],
  templateUrl: './dataview-with-selection-example.component.html',
  styleUrl: './dataview-with-selection-example.component.scss'
})
export class DataviewWithSelectionExampleComponent {
  variant = model<'list' | 'table'>('list');
  columnDefs: DataViewColumnDef[] = [
    {
      name: 'Position',
      dataField: 'position',
      visible: true
    },
    {
      name: 'Name',
      dataField: 'name',
      visible: true
    },
    {
      name: 'Weight',
      dataField: 'weight',
      visible: true
    },
    {
      name: 'Symbol',
      dataField: 'symbol',
      visible: true
    }
  ];
  data = DATA;

  selectedRows: PeriodicElement[] = [];

  rowSelectionChanged(event: DataViewRowSelectionEvent<PeriodicElement>): void {
    console.log(event);
  }

  selectionChanged(rows: PeriodicElement[]): void {
    this.selectedRows = rows;
  }

  allRowsSelectionChanged(isAllSelected: boolean): void {
    console.log(isAllSelected);
  }
}
