import {
  AfterContentInit,
  Component,
  ContentChildren,
  inject,
  Input,
  OnInit, output,
  PLATFORM_ID,
  QueryList
} from '@angular/core';
import { isPlatformServer } from '@angular/common';
import { FilterBuilderOperationDefDirective } from '../filter-builder-operation-def.directive';
import {
  FilterBuilderItemType,
  FilterBuilderGroup,
  FilterBuilderItem,
  FilterBuilderFieldDef,
  FilterBuilderCondition
} from '../types';

@Component({
  selector: 'emr-filter-builder',
  exportAs: 'emrFilterBuilder',
  templateUrl: './filter-builder.component.html',
  styleUrl: './filter-builder.component.css',
  host: {
    'class': 'emr-filter-builder'
  }
})
export class FilterBuilderComponent implements OnInit, AfterContentInit {
  protected _platformId = inject(PLATFORM_ID);
  protected _isServer = isPlatformServer(this._platformId);

  @Input()
  value: FilterBuilderItemType[] = [];

  @Input()
  fieldDefs: FilterBuilderFieldDef[] = [];

  @Input()
  categories = [];

  @Input()
  groupOperations = [
    {
      id: 'and',
      name: 'And'
    },
    {
      id: 'or',
      name: 'Or'
    }
  ];
  private _logicalOperator = this.groupOperations[0].id;

  @ContentChildren(FilterBuilderOperationDefDirective)
  protected _operationDefs: QueryList<FilterBuilderOperationDefDirective>;

  @Input()
  customOperations = [];

  readonly valueChanged = output();

  protected _value: any[] = [];
  protected _operations: any[] = [];

  ngOnInit() {
  }

  ngAfterContentInit() {
    this._operations = this._operationDefs.map(operationDef => {
      return {
        id: operationDef.id,
        name: operationDef.operationName.templateRef
      };
    });
  }

  selectGroupOperation(groupOperation: any, targetGroup?: FilterBuilderGroup) {
    if (targetGroup) {
      targetGroup.logicalOperator = groupOperation.id;
    } else {
      this._logicalOperator = groupOperation.id;
    }
  }

  addCondition(targetGroup?: FilterBuilderGroup) {
    const value = !targetGroup ? this._value : targetGroup.value;
    value.push(
      {
        type: FilterBuilderItem.CONDITION,
        value: [this.fieldDefs[0].dataField, this._operations[0].id, '']
      }
    );
  }

  addGroup(targetGroup?: FilterBuilderGroup) {
    const value = !targetGroup ? this._value : targetGroup.value;
    value.push(
      {
        type: FilterBuilderItem.GROUP,
        logicalOperator: this.groupOperations[0].id,
        value: []
      }
    );
  }

  getConditionField(dataField: string): FilterBuilderFieldDef {
    return this.fieldDefs.find(field => field.dataField === dataField) as FilterBuilderFieldDef;
  }

  getConditionOperation(id: any) {
    return this._operations.find(operation => operation.id === id);
  }

  getSelectedGroupOperationName(targetGroup?: FilterBuilderGroup): string {
    const groupLogicalOperatorId = targetGroup ? targetGroup.logicalOperator : this._logicalOperator

    return this.groupOperations.find(groupOperator => groupOperator.id === groupLogicalOperatorId)?.name || '';
  }

  selectConditionField(condition: FilterBuilderCondition, field: FilterBuilderFieldDef): void {
    condition['value'][0] = field.dataField;
  }

  removeCondition(index: number, items: FilterBuilderItemType[]): void {
    items.splice(index, 1);
  }

  protected _isGroup(item: FilterBuilderItemType): boolean {
    return item.type === FilterBuilderItem.GROUP;
  }

  protected _isCondition(item: FilterBuilderItemType): boolean {
    return item.type === FilterBuilderItem.CONDITION;
  }
}
