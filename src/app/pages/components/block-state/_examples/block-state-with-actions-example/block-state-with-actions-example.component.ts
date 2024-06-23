import { Component } from '@angular/core';
import {
  BlockStateActionsComponent,
  BlockStateComponent,
  BlockStateContentComponent,
  BlockStateTitleComponent
} from '@elementar/components';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-block-state-with-actions-example',
  standalone: true,
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
