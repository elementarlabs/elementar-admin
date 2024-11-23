import { Directive, inject, TemplateRef } from '@angular/core';

@Directive({
    selector: '[emrAlertIcon]',
    exportAs: 'emrAlertIcon',
    host: {
        'class': 'emr-alert-icon'
    },
    standalone: false
})
export class AlertIconDirective {
  public readonly templateRef = inject(TemplateRef, { optional: true });
}
