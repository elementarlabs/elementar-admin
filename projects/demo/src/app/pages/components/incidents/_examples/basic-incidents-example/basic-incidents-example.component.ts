import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import {
  IncidentCloseDirective, IncidentComponent, IncidentDetailsComponent,
  IncidentIconDirective, IncidentsBarComponent, IncidentsComponent,
  IncidentsDescriptionComponent, IncidentsListComponent,
  IncidentsTitleComponent,
  IncidentsToggleIconDirective, IncidentTitleComponent
} from '@elementar/components/incidents';

@Component({
  selector: 'app-basic-incidents-example',
  imports: [
    MatIcon,
    IncidentsTitleComponent,
    IncidentsDescriptionComponent,
    IncidentsToggleIconDirective,
    IncidentIconDirective,
    IncidentCloseDirective,
    IncidentTitleComponent,
    IncidentDetailsComponent,
    IncidentComponent,
    IncidentsListComponent,
    IncidentsBarComponent,
    IncidentsComponent
  ],
  templateUrl: './basic-incidents-example.component.html',
  styleUrl: './basic-incidents-example.component.scss'
})
export class BasicIncidentsExampleComponent {
  incidents = [
    {
      title: 'Maintenance work on the DNS API',
      details: '1 minute ago'
    },
    {
      title: 'Maintenance work on the DNS API',
      details: '2 days ago'
    }
  ];
}
