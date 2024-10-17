import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatRipple } from '@angular/material/core';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'emr-avg-open-rate-widget',
  standalone: true,
  imports: [
    MatIcon,
    MatRipple,
    MatTooltip
  ],
  templateUrl: './avg-open-rate-widget.component.html',
  styleUrl: './avg-open-rate-widget.component.scss'
})
export class AvgOpenRateWidgetComponent {

}
