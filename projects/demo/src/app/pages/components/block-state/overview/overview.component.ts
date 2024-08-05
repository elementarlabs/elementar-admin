import { Component } from '@angular/core';
import { PageComponent } from '@demo/meta/page/page.component';
import { PageContentDirective } from '@demo/meta/page/page-content.directive';
import { PlaygroundComponent } from '@demo/meta/playground/playground.component';
import {
  BasicBlockStateExampleComponent
} from '../_examples/basic-block-state-example/basic-block-state-example.component';
import {
  BlockStateWithImageExampleComponent
} from '../_examples/block-state-with-image-example/block-state-with-image-example.component';
import {
  BlockStateWithIconExampleComponent
} from '../_examples/block-state-with-icon-example/block-state-with-icon-example.component';
import {
  BlockStateWithActionsExampleComponent
} from '../_examples/block-state-with-actions-example/block-state-with-actions-example.component';

@Component({
  standalone: true,
  imports: [
    PageComponent,
    PageContentDirective,
    PlaygroundComponent,
    BasicBlockStateExampleComponent,
    BlockStateWithImageExampleComponent,
    BlockStateWithIconExampleComponent,
    BlockStateWithActionsExampleComponent
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
