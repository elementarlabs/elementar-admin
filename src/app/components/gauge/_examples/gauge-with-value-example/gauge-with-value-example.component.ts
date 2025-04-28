import { Component } from '@angular/core';
import { GaugeComponent, GaugeValueComponent } from '@elementar-ui/components/gauge';

@Component({
  selector: 'app-gauge-with-value-example',
  imports: [
    GaugeValueComponent,
    GaugeComponent
  ],
  templateUrl: './gauge-with-value-example.component.html',
  styleUrl: './gauge-with-value-example.component.scss'
})
export class GaugeWithValueExampleComponent {

}
