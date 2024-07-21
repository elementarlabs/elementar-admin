import { MatCheckboxChange } from '@angular/material/checkbox';

export interface DataViewColumnDef {
  name: string;
  dataField: string;
  dataRenderer?: string;
  visible: boolean;
  width?: string;
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
