import { Directive, inject, TemplateRef } from '@angular/core';

@Directive({
  selector: '[emrDataViewActionBar]',
  standalone: true
})
export class DataViewActionBarDirective {
  readonly templateRef = inject(TemplateRef);
}
