import { Component } from '@angular/core';
import {
  ColorPickerComponent,
  ColorPickerThumbnailComponent,
  ColorPickerTriggerForDirective
} from '@elementar/components/color-picker';

@Component({
  selector: 'app-color-picker-with-popover-example',
  imports: [
    ColorPickerThumbnailComponent,
    ColorPickerComponent,
    ColorPickerTriggerForDirective
  ],
  templateUrl: './color-picker-with-popover-example.component.html',
  styleUrl: './color-picker-with-popover-example.component.scss'
})
export class ColorPickerWithPopoverExampleComponent {
  color = 'green';
}
