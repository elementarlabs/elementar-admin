import { Component } from '@angular/core';
import {
  BlockStateComponent,
  BlockStateContentComponent,
  BlockStateImageComponent,
} from '@elementar-ui/components/block-state';

@Component({
  selector: 'app-block-state-with-image-example',
  imports: [
    BlockStateComponent,
    BlockStateContentComponent,
    BlockStateImageComponent
  ],
  templateUrl: './block-state-with-image-example.component.html',
  styleUrl: './block-state-with-image-example.component.scss'
})
export class BlockStateWithImageExampleComponent {

}
