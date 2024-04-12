import {
  Component, input,
  Input,
  numberAttribute,
  OnInit
} from '@angular/core';

@Component({
  selector: 'emr-gauge',
  exportAs: 'emrGauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.css'],
  host: {
    'class': 'emr-gauge'
  }
})
export class GaugeComponent implements OnInit {
  value = input(0, {
    transform: numberAttribute
  });
  strokeWidth = input(10, {
    transform: numberAttribute
  });
  radius = input(50, {
    transform: numberAttribute
  });

  protected strokeDasharray: string;
  protected initialOffset: number;
  protected strokeDashoffset: number;

  ngOnInit() {
    const circumference = 2 * Math.PI * this.radius();
    const valueInCircumference = (this.value() / 100) * circumference;
    this.strokeDasharray = `${circumference} ${circumference}`;
    this.initialOffset = circumference;
    this.strokeDashoffset = this.initialOffset - valueInCircumference;
  }
}
