import { Component } from '@angular/core';
import { PlaygroundComponent } from '@meta/playground/playground.component';
import { BasicIconExampleComponent } from '../_examples/basic-icon-example/basic-icon-example.component';

@Component({
  standalone: true,
  imports: [
    PlaygroundComponent,
    BasicIconExampleComponent
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
