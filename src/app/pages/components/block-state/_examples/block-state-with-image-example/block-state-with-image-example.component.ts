import { Component } from '@angular/core';
import {
  BlockStateComponent,
  BlockStateContentComponent,
  BlockStateImageComponent,
  BlockStateTitleComponent
} from '@elementar/components';
import { MatIcon } from '@angular/material/icon';

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
