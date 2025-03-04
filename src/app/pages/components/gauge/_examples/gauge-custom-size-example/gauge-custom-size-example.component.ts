import { Component } from '@angular/core';
import { GaugeComponent, GaugeValueComponent } from '@elementar-ui/components/gauge';

@Component({
  selector: 'app-gauge-custom-size-example',
  imports: [
    GaugeComponent,
    GaugeValueComponent
  ],
  templateUrl: './gauge-custom-size-example.component.html',
  styleUrl: './gauge-custom-size-example.component.scss'
})
export class GaugeCustomSizeExampleComponent {

}
