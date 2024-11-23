import { Directive } from '@angular/core';

@Directive({
    selector: '[emrIncidentClose]',
    exportAs: 'emrIncidentClose',
    host: {
        'class': 'emr-incident-close'
    },
    standalone: false
})
export class IncidentCloseDirective {
}
