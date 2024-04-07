import { Component } from '@angular/core';
import { EmrColorPickerModule } from '@components/color-picker';
import { MatFormField, MatLabel, MatPrefix, MatSuffix } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { MatInput } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-with-color-picker-example',
  standalone: true,
  imports: [
    EmrColorPickerModule,
    MatFormField,
    MatIcon,
    MatIconButton,
    MatInput,
    MatLabel,
    MatPrefix,
    MatSuffix,
    FormsModule
  ],
  templateUrl: './input-with-color-picker-example.component.html',
  styleUrl: './input-with-color-picker-example.component.scss'
})
export class InputWithColorPickerExampleComponent {
  color = '#526BD6FF';
}
