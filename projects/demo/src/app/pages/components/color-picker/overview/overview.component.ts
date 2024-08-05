import { Component } from '@angular/core';
import { PlaygroundComponent } from '@demo/meta/playground/playground.component';
import {
  BasicColorPickerExampleComponent
} from '../_examples/basic-color-picker-example/basic-color-picker-example.component';
import {
  ColorPickerWithPopoverExampleComponent
} from '../_examples/color-picker-with-popover-example/color-picker-with-popover-example.component';
import {
  InputWithColorPickerExampleComponent
} from '../_examples/input-with-color-picker-example/input-with-color-picker-example.component';
import { PageComponent } from '@demo/meta/page/page.component';
import { PageContentDirective } from '@demo/meta/page/page-content.directive';

@Component({
  standalone: true,
  imports: [
    PlaygroundComponent,
    BasicColorPickerExampleComponent,
    ColorPickerWithPopoverExampleComponent,
    InputWithColorPickerExampleComponent,
    PageComponent,
    PageContentDirective
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
