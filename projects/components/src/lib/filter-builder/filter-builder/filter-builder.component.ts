import {
  AfterContentInit,
  Component,
  ContentChild,
  ContentChildren,
  inject,
  Input,
  OnInit, output,
  PLATFORM_ID,
  QueryList
} from '@angular/core';
import { FilterBuilderAddDirective } from '../filter-builder-add.directive';
import { FilterBuilderRemoveDirective } from '../filter-builder-remove.directive';
import { isPlatformServer } from '@angular/common';
import { FilterBuilderOperationDefDirective } from '../filter-builder-operation-def.directive';
import { FilterBuilderItemType, FilterBuilderField, FilterBuilderGroup, FilterBuilderItem } from '../types';

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
  fields: FilterBuilderField[] = [];

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

  @ContentChild(FilterBuilderAddDirective)
  protected _addRef: FilterBuilderAddDirective;

  @ContentChild(FilterBuilderRemoveDirective)
  protected _removeRef: FilterBuilderRemoveDirective;

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
        value: [this.fields[0].id, this._operations[0].id, '']
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

  getConditionField(id: any): FilterBuilderField {
    return this.fields.find(field => field.id === id) as FilterBuilderField;
  }

  getConditionOperation(id: any) {
    return this._operations.find(operation => operation.id === id);
  }

  getSelectedGroupOperationName(targetGroup?: FilterBuilderGroup): string {
    const groupLogicalOperatorId = targetGroup ? targetGroup.logicalOperator : this._logicalOperator

    return this.groupOperations.find(groupOperator => groupOperator.id === groupLogicalOperatorId)?.name || '';
  }

  selectConditionField(condition: any, field: any): void {
    condition[0] = field.id;
  }

  selectConditionOperation(condition: any, operation: any): void {
    condition[1] = operation.id;
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
