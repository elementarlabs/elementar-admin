import {
  AfterViewInit,
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  ContentChildren,
  inject,
  Input,
  OnInit,
  output,
  PLATFORM_ID,
  QueryList,
  ViewChildren
} from '@angular/core';
import { isPlatformServer } from '@angular/common';
import { FilterBuilderOperationDefDirective } from '../filter-builder-operation-def.directive';
import { FilterBuilderCondition, FilterBuilderFieldDef, FilterBuilderGroup, FilterBuilderItemType } from '../types';

@Component({
  selector: 'emr-filter-builder',
  exportAs: 'emrFilterBuilder',
  templateUrl: './filter-builder.component.html',
  styleUrl: './filter-builder.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'emr-filter-builder'
  }
})
export class FilterBuilderComponent implements OnInit, AfterViewInit {
  protected _cdr = inject(ChangeDetectorRef);
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

  readonly valueChanged = output<FilterBuilderGroup[]>();

  protected _value: FilterBuilderGroup[] = [];
  protected _operations: any[] = [];
  protected editItem: FilterBuilderCondition | undefined;

  ngOnInit() {
    if (this.value.length) {
      if (!this._isGroup(this.value[0])) {
        throw new Error('Invalid filter value, first element should be a filter group');
      }

      this._logicalOperator = this.value[0]['logicalOperator'] as string;
      this._value = JSON.parse(JSON.stringify(this.value[0]['value']));
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
    this._cdr.detectChanges();
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

  getConditionField(dataField: string): FilterBuilderFieldDef | undefined {
    return this.fieldDefs.find(field => field.dataField === dataField);
  }

  getConditionOperation(id: string) {
    return this._operations.find(operation => operation.id === id);
  }

  getSelectedGroupOperationName(targetGroup?: FilterBuilderGroup): string {
    const groupLogicalOperatorId = targetGroup ? targetGroup.logicalOperator : this._logicalOperator
    return this.groupOperations.find(groupOperator => groupOperator.id === groupLogicalOperatorId)?.name || '';
  }

  selectConditionField(item: FilterBuilderCondition, field: FilterBuilderFieldDef): void {
    this.editItem = undefined;
    let allowedTypes = this._operationAllowedTypesMap.get(field.dataType) as string[];
    item['value'][1] = allowedTypes[0];
    this._resetValue(field, item);
    this._emitChangeEvent();
  }

  operationChanged(item: FilterBuilderCondition, operation: string): void {
    this.editItem = undefined;
    const oldOperation = item['value'][1];

    if (oldOperation === 'isBetween' && operation !== 'isBetween') {
      item['value'][2] = null;
    } else if (oldOperation !== 'isBetween' && operation === 'isBetween') {
      item['value'][2] = [];
    }

    if (['isNotBlank', 'isBlank'].includes(operation)) {
      item['value'][2] = null;
    }

    item['value'][1] = operation;
    this._emitChangeEvent();
  }

  removeCondition(index: number, items: FilterBuilderItemType[]): void {
    items.splice(index, 1);
    this._emitChangeEvent();
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

  modifyValue(item: FilterBuilderCondition): void {
    this.editItem = item;
  }

  getFieldType(item: FilterBuilderCondition): string {
    return (this.fieldDefs.find(f =>
      f.dataField === item['value'][0]
    ) as FilterBuilderFieldDef).dataType;
  }

  isValueNotEmpty(item: FilterBuilderCondition): boolean {
    if (item['value'][1] === 'isBetween') {
      return item['value'][2].length === 2 && item['value'][2][0] !== null && item['value'][2][1] !== null;
    }

    return item['value'][2] !== null && item['value'][2] !== '';
  }

  cancelEdit(): void {
    this.editItem = undefined;
  }

  protected _isGroup(item: FilterBuilderItemType): item is FilterBuilderGroup {
    return 'logicalOperator' in item;
  }

  protected _isCondition(item: FilterBuilderItemType): item is FilterBuilderCondition {
    return !('logicalOperator' in item);
  }

  protected _emitChangeEvent(): void {
    const value = this._normalizeValue(this._value);
    if (value.length > 0) {
      this.valueChanged.emit([
        {
          logicalOperator: this._logicalOperator,
          value: value
        }
      ]);
    } else {
      this.valueChanged.emit([]);
    }
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

  private _normalizeValue(value: FilterBuilderItemType[]): FilterBuilderItemType[] {
    let result: FilterBuilderItemType[] = [];
    value.forEach(item => {
      if (this._isGroup(item)) {
        const groupValue = this._normalizeValue(item.value);

        if (groupValue.length > 0) {
          result = [...result, {
            logicalOperator: item.logicalOperator,
            value: groupValue
          }];
        }
      } else {
        if (this.isValueNotEmpty(item)) {
          result.push(item);
        }
      }
    });

    return result;
  }
}
