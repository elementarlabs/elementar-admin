import {
  AfterViewInit,
  Component,
  ContentChildren,
  inject,
  Input,
  OnInit, output,
  PLATFORM_ID,
  QueryList, ViewChildren
} from '@angular/core';
import { isPlatformServer } from '@angular/common';
import { FilterBuilderOperationDefDirective } from '../filter-builder-operation-def.directive';
import {
  FilterBuilderItemType,
  FilterBuilderGroup,
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
export class FilterBuilderComponent implements OnInit, AfterViewInit {
  protected _platformId = inject(PLATFORM_ID);
  protected _isServer = isPlatformServer(this._platformId);
  protected _operationAllowedTypesMap: Map<string, string[]> = new Map();
  private _resetMethodMap: { [prop: string]: (condition: FilterBuilderCondition) => void } = {
      '_resetStringValue': this._resetStringValue,
      '_resetBooleanValue': this._resetBooleanValue,
      '_resetArrayValue': this._resetArrayValue,
      '_resetNumberValue': this._resetNumberValue,
  };

  @Input()
  value: FilterBuilderGroup[] = [];

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
  protected _logicalOperator = this.groupOperations[0].id;

  @ViewChildren(FilterBuilderOperationDefDirective)
  protected _prebuiltOperationDefs: QueryList<FilterBuilderOperationDefDirective>;

  @ContentChildren(FilterBuilderOperationDefDirective)
  protected _customOperationDefs: QueryList<FilterBuilderOperationDefDirective>;

  protected _operationDefs: FilterBuilderOperationDefDirective[] = [];

  @Input()
  customOperations = [];

  readonly valueChanged = output();

  protected _value: FilterBuilderGroup[] = [];
  protected _operations: any[] = [];

  ngOnInit() {
    if (this.value.length) {
      if (!this._isGroup(this.value[0])) {
        throw new Error('Invalid filter value, first element should be a filter group');
      }

      this._logicalOperator = this.value[0]['logicalOperator'] as string;
      this._value = this.value[0]['value'];
    }
  }

  ngAfterViewInit(): void {
    this._operationDefs = [...this._prebuiltOperationDefs, ...this._customOperationDefs];
    this._operationDefs.forEach(operationDef => {
      this._operations.push({
        id: operationDef.id,
        name: operationDef.operationName.templateRef
      });
      operationDef.allowedDataTypes.forEach((allowedType: string) => {
        if (!this._operationAllowedTypesMap.has(allowedType)) {
          this._operationAllowedTypesMap.set(allowedType, []);
        }

        const allowedTypeValue = this._operationAllowedTypesMap.get(allowedType) as string[];
        allowedTypeValue.push(operationDef.id);
        this._operationAllowedTypesMap.set(allowedType, allowedTypeValue);
      });
    });
  }

  addCondition(targetGroup?: FilterBuilderGroup) {
    const value = !targetGroup ? this._value : targetGroup.value;
    value.push(
      {
        value: [this.fieldDefs[0].dataField, this._operations[0].id, '']
      }
    );
  }

  addGroup(targetGroup?: FilterBuilderGroup) {
    const value = !targetGroup ? this._value : targetGroup.value;
    value.push(
      {
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
    let allowedTypes = this._operationAllowedTypesMap.get(field.dataType) as string[];
    condition['value'][1] = allowedTypes[0];
    this._resetValue(field, condition);
  }

  removeCondition(index: number, items: FilterBuilderItemType[]): void {
    items.splice(index, 1);
  }

  isOperationAllowedForCondition(dataField: string, operationId: string): boolean {
    const fieldDef = this.fieldDefs.find(f =>
      f.dataField === dataField
    ) as FilterBuilderFieldDef;

    let allowedTypes = this._operationAllowedTypesMap.get(fieldDef.dataType);

    if (!allowedTypes) {
      throw new Error('There are not operations for the datatype: ' + fieldDef.dataType);
    }

    return allowedTypes.includes(operationId);
  }

  protected _isGroup(item: FilterBuilderItemType): boolean {
    return 'logicalOperator' in item;
  }

  protected _isCondition(item: FilterBuilderItemType): boolean {
    return !('logicalOperator' in item);
  }

  private _resetValue(field: FilterBuilderFieldDef, condition: FilterBuilderCondition): void {
    const fieldDef = this.fieldDefs.find(f =>
      f.dataField === field.dataField
    ) as FilterBuilderFieldDef;
    const resetMethod = '_reset' + this._capitalizeFirstLetter(fieldDef.dataType) + 'Value';
    this._resetMethodMap[resetMethod](condition);
  }

  private _resetStringValue(condition: FilterBuilderCondition): void {
    condition['value'][2] = '';
  }

  private _resetNumberValue(condition: FilterBuilderCondition): void {
    condition['value'][2] = null;
  }

  private _resetArrayValue(condition: FilterBuilderCondition): void {
    condition['value'][2] = [];
  }

  private _resetBooleanValue(condition: FilterBuilderCondition): void {
    condition['value'][2] = false;
  }

  private _capitalizeFirstLetter(value: string) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}
