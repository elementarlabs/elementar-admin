import { Component } from '@angular/core';
import {
  BasicDividerExampleComponent
} from '../../divider/_examples/basic-divider-example/basic-divider-example.component';
import { PlaygroundComponent } from '@meta/playground/playground.component';
import { BasicExpandExampleComponent } from '../_examples/basic-expand-example/basic-expand-example.component';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [
    BasicDividerExampleComponent,
    PlaygroundComponent,
    BasicExpandExampleComponent
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
