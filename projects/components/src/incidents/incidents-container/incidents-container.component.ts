import { Component, computed, inject } from '@angular/core';
import { IncidentsStore } from '../incidents.store';
import { IncidentsComponent } from '../incidents/incidents.component';
import { MatIcon } from '@angular/material/icon';
import { IncidentsTitleComponent } from '../incidents-title/incidents-title.component';
import { IncidentDetailsComponent } from '../incident-details/incident-details.component';
import { IncidentsBarComponent } from '../incidents-bar/incidents-bar.component';
import { IncidentsDescriptionComponent } from '../incidents-description/incidents-description.component';
import { IncidentsToggleIconDirective } from '../incidents-toggle-icon.directive';
import { IncidentTitleComponent } from '../incident-title/incident-title.component';
import { IncidentCloseDirective } from '../incident-close.directive';
import { IncidentComponent } from '../incident/incident.component';
import { IncidentsListComponent } from '../incidents-list/incidents-list.component';

@Component({
  selector: 'emr-incidents-container',
  exportAs: 'emrIncidentsContainer',
  imports: [
    IncidentsComponent,
    MatIcon,
    IncidentsTitleComponent,
    IncidentDetailsComponent,
    IncidentsBarComponent,
    IncidentsDescriptionComponent,
    IncidentsToggleIconDirective,
    IncidentTitleComponent,
    IncidentsListComponent,
    IncidentCloseDirective,
    IncidentComponent
  ],
  templateUrl: './incidents-container.component.html',
  styleUrl: './incidents-container.component.scss',
  host: {
    'class': 'emr-incidents-container',
    '[class.is-active]': 'hasIncidents()'
  }
})
export class IncidentsContainerComponent {
  protected _incidentsStore = inject(IncidentsStore);

  hasIncidents = computed<boolean>(() => {
    return this._incidentsStore.incidents().length > 0;
  });
  title = computed(() => {
    return this._incidentsStore.title();
  });
  description = computed(() => {
    return this._incidentsStore.description();
  });
  incidents = computed(() => {
    return this._incidentsStore.incidents();
  });
}
