import { Directive } from '@angular/core';

@Directive({
  selector: '[emrIncidentsToggleIcon]',
  exportAs: 'emrIncidentsToggleIcon',
  host: {
    'class': 'emr-incidents-toggle-icon',
  }
})
export class IncidentsToggleIconDirective {

}
