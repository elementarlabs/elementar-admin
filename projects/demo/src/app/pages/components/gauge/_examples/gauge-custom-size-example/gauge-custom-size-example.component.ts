import { Component } from '@angular/core';
import { EmrGaugeModule } from '@elementar/components/gauge';

@Component({
  selector: 'app-gauge-custom-size-example',
  standalone: true,
  imports: [
    EmrGaugeModule
  ],
  templateUrl: './gauge-custom-size-example.component.html',
  styleUrl: './gauge-custom-size-example.component.scss'
})
export class GaugeCustomSizeExampleComponent {

}
