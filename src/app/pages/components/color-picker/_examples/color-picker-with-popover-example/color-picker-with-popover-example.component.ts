import { Component } from '@angular/core';
import { EmrColorPickerModule } from '@elementar/components/color-picker';

@Component({
  selector: 'app-color-picker-with-popover-example',
  standalone: true,
  imports: [
    EmrColorPickerModule
  ],
  templateUrl: './color-picker-with-popover-example.component.html',
  styleUrl: './color-picker-with-popover-example.component.scss'
})
export class ColorPickerWithPopoverExampleComponent {
  color = 'green';
}
