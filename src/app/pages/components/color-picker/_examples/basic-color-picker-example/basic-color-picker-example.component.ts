import { Component } from '@angular/core';
import { EmrColorPickerModule } from '@elementar/components';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-basic-color-picker-example',
  standalone: true,
  imports: [
    EmrColorPickerModule,
    FormsModule
  ],
  templateUrl: './basic-color-picker-example.component.html',
  styleUrl: './basic-color-picker-example.component.scss'
})
export class BasicColorPickerExampleComponent {
  color = 'red';
}
