import { Component } from '@angular/core';
import { MatFormField, MatLabel, MatSuffix } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {
  ColorPickerComponent,
  ColorPickerThumbnailComponent,
  ColorPickerTriggerForDirective
} from '@elementar/components/color-picker';

@Component({
  selector: 'app-input-with-color-picker-example',
  imports: [
    MatFormField,
    MatInput,
    MatLabel,
    MatSuffix,
    FormsModule,
    ColorPickerTriggerForDirective,
    ColorPickerThumbnailComponent,
    ColorPickerComponent
  ],
  templateUrl: './input-with-color-picker-example.component.html',
  styleUrl: './input-with-color-picker-example.component.scss'
})
export class InputWithColorPickerExampleComponent {
  color = '#526BD6FF';
}
