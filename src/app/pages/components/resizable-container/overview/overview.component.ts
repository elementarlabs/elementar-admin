import { Component } from '@angular/core';
import { PlaygroundComponent } from '@meta/playground/playground.component';
import {
  BasicResizableContainerExampleComponent
} from '../_examples/basic-resizable-container-example/basic-resizable-container-example.component';

@Component({
  standalone: true,
  imports: [
    PlaygroundComponent,
    BasicResizableContainerExampleComponent
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
