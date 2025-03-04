import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import {
  BlockStateComponent,
  BlockStateContentComponent,
  BlockStateIconComponent
} from '@elementar-ui/components/block-state';

@Component({
  selector: 'app-block-state-with-icon-example',
  imports: [
    BlockStateComponent,
    BlockStateContentComponent,
    MatIcon,
    BlockStateIconComponent
  ],
  templateUrl: './block-state-with-icon-example.component.html',
  styleUrl: './block-state-with-icon-example.component.scss'
})
export class BlockStateWithIconExampleComponent {

}
