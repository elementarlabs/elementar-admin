import { Component } from '@angular/core';
import {
  BasicDividerExampleComponent
} from '../../divider/_examples/basic-divider-example/basic-divider-example.component';
import { PlaygroundComponent } from '@meta/playground/playground.component';
import { BasicTreeExampleComponent } from '../_examples/basic-tree-example/basic-tree-example.component';
import {
  TreeWithDynamicDataExampleComponent
} from '../_examples/tree-with-dynamic-data-example/tree-with-dynamic-data-example.component';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [
    BasicDividerExampleComponent,
    PlaygroundComponent,
    BasicTreeExampleComponent,
    TreeWithDynamicDataExampleComponent
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
