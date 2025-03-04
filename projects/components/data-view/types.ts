import { MatCheckboxChange } from '@angular/material/checkbox';

export interface DataView {
  api: DataViewAPI;
}

export interface DataViewAPI {
  search(value: string): void;
  selectAll(): void;
  unselectAll(): void;
}

export interface DataViewColumnDef {
  name: string;
  dataField: string;
  dataRenderer?: string;
  visible: boolean;
  width?: string;
  valueGetter?: (value: any) => any;
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

export interface DataViewActionBarAPI {
  setForceVisible: (visible: boolean) => void;
}

export type DataViewRowModelType = 'clientSide' | 'serverSide';
