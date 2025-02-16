import { Component, model } from '@angular/core';
import {
  DataViewColumnDef,
  DataViewComponent,
  DataViewEmptyFilterResultsDirective
} from '@elementar-ui/components';
import {
  BlockStateComponent,
  BlockStateContentComponent,
  BlockStateIconComponent
} from '@elementar-ui/components';
import { MatIcon } from '@angular/material/icon';
import { MatFormField } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInput } from '@angular/material/input';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';

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
  selector: 'app-data-view-filter-data-example',
  imports: [
    DataViewComponent,
    BlockStateComponent,
    BlockStateContentComponent,
    BlockStateIconComponent,
    DataViewEmptyFilterResultsDirective,
    MatIcon,
    MatFormField,
    FormsModule,
    MatInput,
    MatRadioButton,
    MatRadioGroup
  ],
  templateUrl: './data-view-filter-data-example.component.html',
  styleUrl: './data-view-filter-data-example.component.scss'
})
export class DataViewFilterDataExampleComponent {
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
  search = '';
}
