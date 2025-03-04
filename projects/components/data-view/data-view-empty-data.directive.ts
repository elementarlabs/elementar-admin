import { Directive, inject, TemplateRef } from '@angular/core';

@Directive({
  selector: '[emrDataViewEmptyData]',
  exportAs: 'emrDataViewEmptyData',
  standalone: true,
  host: {
    'class': 'emr-data-view-empty-data',
  }
})
export class DataViewEmptyDataDirective {
  readonly templateRef = inject(TemplateRef);
}
