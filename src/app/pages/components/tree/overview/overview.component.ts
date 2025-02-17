import { Component } from '@angular/core';
import { PlaygroundComponent } from '@meta/playground/playground.component';
import { BasicTreeExampleComponent } from '../_examples/basic-tree-example/basic-tree-example.component';
import {
  TreeWithDynamicDataExampleComponent
} from '../_examples/tree-with-dynamic-data-example/tree-with-dynamic-data-example.component';
import { PageComponent } from '@meta/page/page.component';
import { PageContentDirective } from '@meta/page/page-content.directive';

@Component({
  selector: 'app-overview',
  imports: [
    PlaygroundComponent,
    BasicTreeExampleComponent,
    TreeWithDynamicDataExampleComponent,
    PageComponent,
    PageContentDirective
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
