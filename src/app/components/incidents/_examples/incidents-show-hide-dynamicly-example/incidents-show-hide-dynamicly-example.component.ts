import { Component, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { IncidentsStore } from '@elementar-ui/components/incidents';

@Component({
  selector: 'app-incidents-show-hide-dynamicly-example',
  imports: [
    MatButton
  ],
  templateUrl: './incidents-show-hide-dynamicly-example.component.html',
  styleUrl: './incidents-show-hide-dynamicly-example.component.scss'
})
export class IncidentsShowHideDynamiclyExampleComponent {
  private _incidentsStore = inject(IncidentsStore);

  toggleIncidents() {
    this._incidentsStore.show({
      title: 'Object Storage in location hel1 degraded',
      description: 'Start: 2025-02-19 12:25 UTC+0 ',
      incidents: [
        {
          id: 1,
          title: 'The Object Storage service in location hel1 is currently degraded. Requests to download or upload objects may fail or time out. We are already working on fixing the issue and getting things back to normal.',
        },
        {
          id: 2,
          title: 'Service is stable again, but we continue to monitor it.',
          details: 'Last update: 2025-02-19 13:48 UTC+0'
        }
      ]
    });
  }
}
