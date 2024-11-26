import { Directive, Input, contentChild } from '@angular/core';
import { FilterBuilderOperationNameDirective } from './filter-builder-operation-name.directive';
import { FilterBuilderOperationIconDirective } from './filter-builder-operation-icon.directive';

@Directive({
  selector: '[emrFilterBuilderOperationDef]'
})
export class FilterBuilderOperationDefDirective {
  @Input('emrFilterBuilderOperationDef')
  id: string;

  @Input()
  allowedDataTypes: string[] = [];

  readonly operationName = contentChild(FilterBuilderOperationNameDirective);
  readonly operationIcon = contentChild(FilterBuilderOperationIconDirective);
}
