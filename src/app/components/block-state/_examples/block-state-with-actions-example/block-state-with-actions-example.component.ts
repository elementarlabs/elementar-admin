import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import {
  BlockStateActionsComponent,
  BlockStateComponent,
  BlockStateContentComponent,
  BlockStateTitleComponent
} from '@elementar-ui/components/block-state';

@Component({
  selector: 'app-block-state-with-actions-example',
  imports: [
    BlockStateComponent,
    BlockStateContentComponent,
    BlockStateTitleComponent,
    BlockStateActionsComponent,
    MatButton
  ],
  templateUrl: './block-state-with-actions-example.component.html',
  styleUrl: './block-state-with-actions-example.component.scss'
})
export class BlockStateWithActionsExampleComponent {

}
