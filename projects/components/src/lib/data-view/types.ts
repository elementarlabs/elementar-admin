import { MatCheckboxChange } from '@angular/material/checkbox';
import { InputSignal } from '@angular/core';

export interface DataViewColumnDef {
  name: string;
  dataField: string;
  dataRenderer?: string;
  visible: boolean;
}

export interface DataViewRowSelectionEvent<T> {
  matCheckboxChange: MatCheckboxChange;
  row: T;
  checked: boolean;
}

export interface DataViewCellRenderer {
  dataRenderer: string;
  component: () => Promise<any>;
}

export interface DataViewCellRendererComponent {
  element: any;
  columnDef: any;
  fieldData: any;
}
