import { Component } from '@angular/core';
import { PlaygroundComponent } from '@meta/playground/playground.component';
import {
  BasicColorPickerExampleComponent
} from '../_examples/basic-color-picker-example/basic-color-picker-example.component';
import {
  ColorPickerWithPopoverExampleComponent
} from '../_examples/color-picker-with-popover-example/color-picker-with-popover-example.component';
import {
  InputWithColorPickerExampleComponent
} from '../_examples/input-with-color-picker-example/input-with-color-picker-example.component';
import { PageComponent } from '@meta/page/page.component';
import { PageContentDirective } from '@meta/page/page-content.directive';

@Component({
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
