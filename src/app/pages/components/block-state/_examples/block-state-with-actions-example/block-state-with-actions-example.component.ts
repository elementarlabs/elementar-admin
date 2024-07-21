import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import {
  BlockStateActionsComponent,
  BlockStateComponent,
  BlockStateContentComponent,
  BlockStateTitleComponent
} from '@elementar/components/block-state';

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
