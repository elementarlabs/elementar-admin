import { Directive } from '@angular/core';

@Directive({
  selector: 'emr-alert-title,[emrAlertTitle]',
  exportAs: 'emrAlertTitle',
  host: {
    'class': 'emr-alert-title'
  }
})
export class AlertTitleDirective {
}
