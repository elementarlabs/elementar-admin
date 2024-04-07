import { Directive, HostListener, inject } from '@angular/core';
import { ALERT } from './alert.properties';
import { AlertComponent } from './alert/alert.component';

@Directive({
  selector: '[emrAlertClose]',
  exportAs: 'emrAlertClose',
  host: {
    'class': 'emr-alert-close'
  }
})
export class AlertCloseDirective {
  private _alert = inject<AlertComponent>(ALERT);

  @HostListener('click')
  private _handleClick() {
    this._alert.api.close();
  }
}
