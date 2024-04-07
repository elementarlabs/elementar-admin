import { Component } from '@angular/core';
import { EmrGaugeModule } from '@components/gauge';

@Component({
  selector: 'app-basic-gauge-example',
  standalone: true,
  imports: [
    EmrGaugeModule
  ],
  templateUrl: './basic-gauge-example.component.html',
  styleUrl: './basic-gauge-example.component.scss'
})
export class BasicGaugeExampleComponent {

}
