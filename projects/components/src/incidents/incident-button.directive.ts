import { Directive } from '@angular/core';

@Directive({
  selector: '[emrIncidentButton]',
  exportAs: 'emrIncidentButton',
  host: {
    'class': 'emr-incident-button',
  }
})
export class IncidentButtonDirective {

}
