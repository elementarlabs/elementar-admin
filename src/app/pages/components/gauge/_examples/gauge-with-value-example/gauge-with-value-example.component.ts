import { Component } from '@angular/core';
import { EmrGaugeModule } from '@elementar/components';

@Component({
  selector: 'app-gauge-with-value-example',
  standalone: true,
  imports: [
    EmrGaugeModule
  ],
  templateUrl: './gauge-with-value-example.component.html',
  styleUrl: './gauge-with-value-example.component.scss'
})
export class GaugeWithValueExampleComponent {

}
