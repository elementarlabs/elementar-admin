import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import {
  BlockStateComponent,
  BlockStateContentComponent, BlockStateImageComponent,
  BlockStateTitleComponent
} from '@elementar/components/block-state';

@Component({
  selector: 'app-block-state-with-image-example',
  standalone: true,
  imports: [
    BlockStateComponent,
    BlockStateContentComponent,
    BlockStateTitleComponent,
    BlockStateImageComponent,
    MatIcon
  ],
  templateUrl: './block-state-with-image-example.component.html',
  styleUrl: './block-state-with-image-example.component.scss'
})
export class BlockStateWithImageExampleComponent {

}
