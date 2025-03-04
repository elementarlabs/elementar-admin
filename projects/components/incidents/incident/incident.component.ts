import { Component, inject, input } from '@angular/core';
import { IncidentsStore } from '../incidents.store';
import { MatIconButton } from '@angular/material/button';

let incidentId = 0;

@Component({
  selector: 'emr-incident,[emr-incident]',
  exportAs: 'emrIncident',
  imports: [
    MatIconButton
  ],
  templateUrl: './incident.component.html',
  styleUrl: './incident.component.scss',
  host: {
    'class': 'emr-incident'
  }
})
export class IncidentComponent {
  private _incidentsStore = inject(IncidentsStore);

  incidentId = input(`incident-${incidentId++}`);

  close() {
    this._incidentsStore.hide();
  }
}
