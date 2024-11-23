import { Directive } from '@angular/core';

@Directive({
    selector: '[emrIncidentIcon]',
    exportAs: 'emrIncidentIcon',
    host: {
        'class': 'emr-incident-icon'
    },
    standalone: false
})
export class IncidentIconDirective {
}
