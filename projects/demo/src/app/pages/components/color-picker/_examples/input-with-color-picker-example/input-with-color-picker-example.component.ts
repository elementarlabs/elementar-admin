import { Component } from '@angular/core';
import { EmrColorPickerModule } from '@elementar/components/color-picker';
import { MatFormField, MatLabel, MatSuffix } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-with-color-picker-example',
  imports: [
    EmrColorPickerModule,
    MatFormField,
    MatInput,
    MatLabel,
    MatSuffix,
    FormsModule
  ],
  templateUrl: './input-with-color-picker-example.component.html',
  styleUrl: './input-with-color-picker-example.component.scss'
})
export class InputWithColorPickerExampleComponent {
  color = '#526BD6FF';
}
