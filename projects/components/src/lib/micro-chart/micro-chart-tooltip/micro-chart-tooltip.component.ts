import { Component } from '@angular/core';

@Component({
  selector: 'emr-micro-chart-tooltip',
  exportAs: 'emrMicroChartTooltip',
  standalone: true,
  imports: [],
  templateUrl: './micro-chart-tooltip.component.html',
  styleUrl: './micro-chart-tooltip.component.scss',
  host: {
    'class': 'emr-micro-chart-tooltip'
  }
})
export class MicroChartTooltipComponent {

}
