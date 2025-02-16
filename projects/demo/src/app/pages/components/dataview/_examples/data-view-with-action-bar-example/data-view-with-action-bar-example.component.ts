import { Component, model } from '@angular/core';
import {
  DataViewActionBarComponent, DataViewActionBarDirective,
  DataViewColumnDef,
  DataViewComponent
} from '@elementar-ui/components';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
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
  selector: 'app-data-view-with-action-bar-example',
  imports: [
    DataViewComponent,
    MatButton,
    MatIconButton,
    MatIcon,
    MatMenu,
    MatMenuItem,
    MatMenuTrigger,
    DataViewActionBarComponent,
    DataViewActionBarDirective,
    MatRadioButton,
    MatRadioGroup,
    FormsModule
  ],
  templateUrl: './data-view-with-action-bar-example.component.html',
  styleUrl: './data-view-with-action-bar-example.component.scss'
})
export class DataViewWithActionBarExampleComponent {
  variant = model<'list' | 'table'>('list');
  columnDefs: DataViewColumnDef[] = [
    {
      name: 'Position',
      dataField: 'position',
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
    },
    {
      name: 'Name',
      dataField: 'name',
      visible: true
    },
  ];
  data = DATA;

  share(row: any): void {
    console.log(row);
  }
}
