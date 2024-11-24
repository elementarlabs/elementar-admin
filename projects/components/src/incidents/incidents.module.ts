import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncidentsComponent } from './incidents/incidents.component';
import { IncidentsBarComponent } from './incidents-bar/incidents-bar.component';
import { IncidentsListComponent } from './incidents-list/incidents-list.component';
import { IncidentComponent } from './incident/incident.component';
import { IncidentTitleComponent } from './incident-title/incident-title.component';
import { IncidentDetailsComponent } from './incident-details/incident-details.component';
import { IncidentButtonDirective } from './incident-button.directive';
import { IncidentsTitleComponent } from './incidents-title/incidents-title.component';
import { IncidentsDescriptionComponent } from './incidents-description/incidents-description.component';
import { IncidentsToggleIconDirective } from './incidents-toggle-icon.directive';
import { IncidentIconDirective } from './incident-icon.directive';
import { IncidentCloseDirective } from './incident-close.directive';

@NgModule({
    imports: [
        CommonModule,
        IncidentsComponent,
        IncidentsBarComponent,
        IncidentsListComponent,
        IncidentComponent,
        IncidentTitleComponent,
        IncidentDetailsComponent,
        IncidentButtonDirective,
        IncidentsTitleComponent,
        IncidentsDescriptionComponent,
        IncidentsToggleIconDirective,
        IncidentIconDirective,
        IncidentCloseDirective
    ],
    exports: [
        IncidentsComponent,
        IncidentsBarComponent,
        IncidentsListComponent,
        IncidentComponent,
        IncidentTitleComponent,
        IncidentDetailsComponent,
        IncidentButtonDirective,
        IncidentsTitleComponent,
        IncidentsDescriptionComponent,
        IncidentsToggleIconDirective,
        IncidentIconDirective,
        IncidentCloseDirective
    ]
})
export class EmrIncidentsModule { }
