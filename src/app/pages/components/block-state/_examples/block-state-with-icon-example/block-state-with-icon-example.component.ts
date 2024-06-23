import { Component } from '@angular/core';
import {
  BlockStateComponent,
  BlockStateContentComponent,
  BlockStateIconComponent
} from '@elementar/components';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-block-state-with-icon-example',
  standalone: true,
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
