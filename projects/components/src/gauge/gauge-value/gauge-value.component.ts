import { Component } from '@angular/core';

@Component({
  selector: 'emr-gauge-value',
  exportAs: 'emrGaugeValue',
  templateUrl: './gauge-value.component.html',
  styleUrls: ['./gauge-value.component.scss'],
  host: {
    'class': 'emr-gauge-value'
  }
})
export class GaugeValueComponent {
}
