import { Component } from '@angular/core';
import { EmrIncidentsModule } from '@elementar/components/incidents';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-basic-incidents-example',
  standalone: true,
  imports: [
    EmrIncidentsModule,
    MatIcon
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
