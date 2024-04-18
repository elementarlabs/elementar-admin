export enum FilterBuilderItem {
  CONDITION = 'condition',
  GROUP = 'group'
}

export interface FilterBuilderField {
  id: string | number;
  name: string;
  type: string;
  format?: string;
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
