import { Component } from '@angular/core';
import { PlaygroundComponent } from '@meta/playground/playground.component';
import { BasicIncidentsExampleComponent } from '../_examples/basic-incidents-example/basic-incidents-example.component';

@Component({
  standalone: true,
  imports: [
    PlaygroundComponent,
    BasicIncidentsExampleComponent
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
