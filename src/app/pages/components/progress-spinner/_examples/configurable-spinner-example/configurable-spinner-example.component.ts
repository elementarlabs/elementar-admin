import { Component } from '@angular/core';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { MatSlider, MatSliderThumb } from '@angular/material/slider';
import { MatProgressSpinner, ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { ThemePalette } from '@angular/material/core';
import { MatDivider } from '@angular/material/divider';

@Component({
  selector: 'app-configurable-spinner-example',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatRadioGroup,
    MatRadioButton,
    FormsModule,
    MatSlider,
    MatSliderThumb,
    MatProgressSpinner,
    MatDivider
  ],
  templateUrl: './configurable-spinner-example.component.html',
  styleUrl: './configurable-spinner-example.component.scss'
})
export class ConfigurableSpinnerExampleComponent {
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  value = 50;
}
