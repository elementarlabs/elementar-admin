import { Component } from '@angular/core';
import { MatSlider, MatSliderThumb } from '@angular/material/slider';

@Component({
    selector: 'app-basic-slider-example',
    imports: [
        MatSliderThumb,
        MatSlider
    ],
    templateUrl: './basic-slider-example.component.html',
    styleUrl: './basic-slider-example.component.scss'
})
export class BasicSliderExampleComponent {

}
