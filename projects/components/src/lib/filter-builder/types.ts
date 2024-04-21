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
  value: [string, string, any];
}

export interface FilterBuilderGroup {
  logicalOperator?: string;
  value: FilterBuilderItemType[];
}

export type FilterBuilderItemType = FilterBuilderCondition | FilterBuilderGroup;
