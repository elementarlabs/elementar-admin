import { ContentChild, Directive, Input } from '@angular/core';
import { FilterBuilderOperationNameDirective } from './filter-builder-operation-name.directive';
import { FilterBuilderOperationIconDirective } from './filter-builder-operation-icon.directive';

@Directive({ selector: '[emrFilterBuilderOperationDef]' })
export class FilterBuilderOperationDefDirective {
  @Input('emrFilterBuilderOperationDef')
  id: string;

  @Input()
  allowedDataTypes: string[] = [];

  @ContentChild(FilterBuilderOperationNameDirective)
  readonly operationName: FilterBuilderOperationNameDirective;

  @ContentChild(FilterBuilderOperationIconDirective)
  readonly operationIcon: FilterBuilderOperationIconDirective;
}
