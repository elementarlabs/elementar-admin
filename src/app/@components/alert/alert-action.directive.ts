import { Directive } from '@angular/core';

@Directive({
  selector: '[emrAlertAction]',
  exportAs: 'emrAlertAction',
  host: {
    'class': 'emr-alert-action'
  }
})
export class AlertActionDirective {
}
