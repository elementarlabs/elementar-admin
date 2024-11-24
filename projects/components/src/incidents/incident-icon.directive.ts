import { Directive } from '@angular/core';

@Directive({
    selector: '[emrIncidentIcon]',
    exportAs: 'emrIncidentIcon',
    host: {
        'class': 'emr-incident-icon'
    }
})
export class IncidentIconDirective {
}
