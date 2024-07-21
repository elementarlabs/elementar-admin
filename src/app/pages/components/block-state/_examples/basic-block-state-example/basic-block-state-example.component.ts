import { Component } from '@angular/core';
import {
  BlockStateComponent, BlockStateContentComponent,
  BlockStateImageComponent,
  BlockStateTitleComponent
} from '@elementar/components/block-state';

@Component({
  selector: 'app-basic-block-state-example',
  standalone: true,
  imports: [
    BlockStateComponent,
    BlockStateImageComponent,
    BlockStateTitleComponent,
    BlockStateContentComponent
  ],
  templateUrl: './basic-block-state-example.component.html',
  styleUrl: './basic-block-state-example.component.scss'
})
export class BasicBlockStateExampleComponent {

}
