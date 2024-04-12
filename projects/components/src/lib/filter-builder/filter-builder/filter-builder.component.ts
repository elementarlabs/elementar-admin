import {
  AfterContentInit,
  Component,
  ContentChild,
  ContentChildren,
  inject,
  Input,
  OnInit,
  PLATFORM_ID,
  QueryList
} from '@angular/core';
import { FilterBuilderAddDirective } from '../filter-builder-add.directive';
import { FilterBuilderRemoveDirective } from '../filter-builder-remove.directive';
import { isPlatformServer } from '@angular/common';
import { FilterBuilderOperationDefDirective } from '../filter-builder-operation-def.directive';
import { IField } from '../types';

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
  value: any[] = [];

  @Input()
  fields: IField[] = [];

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
  selectedGroupOperation = this.groupOperations[0];

  @ContentChild(FilterBuilderAddDirective)
  protected _addRef: FilterBuilderAddDirective;

  @ContentChild(FilterBuilderRemoveDirective)
  protected _removeRef: FilterBuilderRemoveDirective;

  @ContentChildren(FilterBuilderOperationDefDirective)
  protected _operationDefs: QueryList<FilterBuilderOperationDefDirective>;

  @Input()
  customOperations = [];

  protected _value: any[] = [...this.value];
  protected _operations: any[] = [];

  ngOnInit() {
    // console.log(this.fields);
    // console.log(this._value);
  }

  ngAfterContentInit() {
    this._operations = this._operationDefs.map(operationDef => {
      return {
        id: operationDef.id,
        name: operationDef.operationName.templateRef
      };
    });
  }

  selectGroupOperation(groupOperation: any, targetGroup = null) {
    if (!targetGroup) {
      this.selectedGroupOperation = groupOperation;
      this._value.forEach((condition, index) => {
        if (typeof condition === 'string') {
          this._value[index] = this.selectedGroupOperation.id;
        }
      });
      this.value = this._value;
    }
  }

  addCondition(targetGroup = null) {
    if (!targetGroup) {
      this._value.push(
        [this.fields[0].id, this._operations[0].id, '']
      );
    }
  }

  addGroup(targetGroup = null) {

  }

  getConditionField(id: any): IField {
    return this.fields.find(field => field.id === id) as IField;
  }

  getConditionOperation(id: any) {
    return this._operations.find(operation => operation.id === id);
  }

  selectConditionField(condition: any, field: any) {
    condition[0] = field.id;
  }

  selectConditionOperation(condition: any, operation: any) {
    condition[1] = operation.id;
  }

  removeCondition(index: number, targetGroup = null) {
    if (!targetGroup) {
      this._value.splice(index, 1);
    }
  }
}
