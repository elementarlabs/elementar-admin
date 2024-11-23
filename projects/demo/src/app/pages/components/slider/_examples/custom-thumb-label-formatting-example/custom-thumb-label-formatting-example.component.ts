import { Component } from '@angular/core';
import { MatSlider, MatSliderThumb } from '@angular/material/slider';

@Component({
    selector: 'app-custom-thumb-label-formatting-example',
    imports: [
        MatSlider,
        MatSliderThumb
    ],
    templateUrl: './custom-thumb-label-formatting-example.component.html',
    styleUrl: './custom-thumb-label-formatting-example.component.scss'
})
export class CustomThumbLabelFormattingExampleComponent {
  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return `${value}`;
  }
}
