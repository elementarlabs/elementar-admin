import { Component } from '@angular/core';

@Component({
  selector: 'emr-incident,[emr-incident]',
  exportAs: 'emrIncident',
  templateUrl: './incident.component.html',
  styleUrls: ['./incident.component.css'],
  host: {
    'class': 'emr-incident'
  }
})
export class IncidentComponent {
}
