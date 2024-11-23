import { Directive } from '@angular/core';

@Directive({
    selector: 'emr-alert-title,[emrAlertTitle]',
    exportAs: 'emrAlertTitle',
    host: {
        'class': 'emr-alert-title'
    },
    standalone: false
})
export class AlertTitleDirective {
}
