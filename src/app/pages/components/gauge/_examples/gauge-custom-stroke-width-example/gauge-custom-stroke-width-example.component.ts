import { Component } from '@angular/core';
import { EmrGaugeModule } from '@elementar/components/gauge';

@Component({
  selector: 'app-gauge-custom-stroke-width-example',
  standalone: true,
  imports: [
    EmrGaugeModule
  ],
  templateUrl: './gauge-custom-stroke-width-example.component.html',
  styleUrl: './gauge-custom-stroke-width-example.component.scss'
})
export class GaugeCustomStrokeWidthExampleComponent {

}
