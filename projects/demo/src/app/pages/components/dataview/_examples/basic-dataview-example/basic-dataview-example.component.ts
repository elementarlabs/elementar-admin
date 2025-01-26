import { Component, model } from '@angular/core';
import { DataViewColumnDef, DataViewComponent } from '@elementar/components/data-view';
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
  selector: 'app-basic-dataview-example',
  imports: [
    DataViewComponent,
    MatRadioButton,
    MatRadioGroup,
    FormsModule
  ],
  templateUrl: './basic-dataview-example.component.html',
  styleUrl: './basic-dataview-example.component.scss'
})
export class BasicDataviewExampleComponent {
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
}
