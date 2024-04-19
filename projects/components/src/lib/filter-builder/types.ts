export enum FilterBuilderItem {
  CONDITION = 'condition',
  GROUP = 'group'
}

export interface FilterBuilderFieldDef {
  name: string;
  dataType: string;
  dataField: string;
  format?: string;
  filterOperations?: string[];
  lookup?: {
    dataSource: {
      id: string;
      name: string;
    }[]
  }
}

export interface FilterBuilderCondition {
  type: FilterBuilderItem.CONDITION;
  value: any[];
}

export interface FilterBuilderGroup {
  type: FilterBuilderItem.GROUP;
  logicalOperator?: string;
  value: FilterBuilderItemType[];
}

export type FilterBuilderItemType = FilterBuilderCondition | FilterBuilderGroup;
