import { Component } from '@angular/core';
import { MatSlider, MatSliderRangeThumb } from '@angular/material/slider';

@Component({
  selector: 'app-range-slider-example',
  standalone: true,
  imports: [
    MatSlider,
    MatSliderRangeThumb
  ],
  templateUrl: './range-slider-example.component.html',
  styleUrl: './range-slider-example.component.scss'
})
export class RangeSliderExampleComponent {

}
