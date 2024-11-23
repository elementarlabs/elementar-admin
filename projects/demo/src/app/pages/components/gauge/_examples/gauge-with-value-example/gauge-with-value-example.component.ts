import { Component } from '@angular/core';
import { EmrGaugeModule } from '@elementar/components/gauge';

@Component({
    selector: 'app-gauge-with-value-example',
    imports: [
        EmrGaugeModule
    ],
    templateUrl: './gauge-with-value-example.component.html',
    styleUrl: './gauge-with-value-example.component.scss'
})
export class GaugeWithValueExampleComponent {

}
