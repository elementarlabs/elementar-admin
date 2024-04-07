import { Component } from '@angular/core';
import { PlaygroundComponent } from '@meta/playground/playground.component';
import { BasicBadgesExampleComponent } from '../_examples/basic-badges-example/basic-badges-example.component';

@Component({
  standalone: true,
  imports: [
    PlaygroundComponent,
    BasicBadgesExampleComponent
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
