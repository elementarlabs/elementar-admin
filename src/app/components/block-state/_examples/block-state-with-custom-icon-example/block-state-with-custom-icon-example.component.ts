import { Component } from '@angular/core';
import {
  BlockStateComponent,
  BlockStateContentComponent,
  BlockStateIconComponent
} from '@elementar-ui/components/block-state';
import { IconComponent } from '@elementar-ui/components/icon';

@Component({
  selector: 'app-block-state-with-custom-icon-example',
  imports: [
    BlockStateComponent,
    BlockStateContentComponent,
    BlockStateIconComponent,
    IconComponent
  ],
  templateUrl: './block-state-with-custom-icon-example.component.html',
  styleUrl: './block-state-with-custom-icon-example.component.scss'
})
export class BlockStateWithCustomIconExampleComponent {

}
