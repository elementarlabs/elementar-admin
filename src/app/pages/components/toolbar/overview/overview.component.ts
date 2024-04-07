import { Component } from '@angular/core';
import {
  BasicDividerExampleComponent
} from '../../divider/_examples/basic-divider-example/basic-divider-example.component';
import { PlaygroundComponent } from '@meta/playground/playground.component';
import { BasicToolbarExampleComponent } from '../_examples/basic-toolbar-example/basic-toolbar-example.component';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [
    BasicDividerExampleComponent,
    PlaygroundComponent,
    BasicToolbarExampleComponent
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
