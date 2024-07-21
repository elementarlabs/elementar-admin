import { Directive } from '@angular/core';
import { MatRipple } from "@angular/material/core";

@Directive({
  selector: '[emrAlertAction]',
  exportAs: 'emrAlertAction',
  host: {
    'class': 'emr-alert-action'
  },
  hostDirectives: [MatRipple]
})
export class AlertActionDirective {
}
