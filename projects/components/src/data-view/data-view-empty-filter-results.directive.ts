import { Directive, inject, TemplateRef } from '@angular/core';

@Directive({
  selector: '[emrDataViewEmptyFilterResults]',
  exportAs: 'emrDataViewEmptyFilterResults',
  standalone: true,
  host: {
    'class': 'emr-data-view-empty-filter-results',
  }
})
export class DataViewEmptyFilterResultsDirective {
  readonly templateRef = inject(TemplateRef);
}
