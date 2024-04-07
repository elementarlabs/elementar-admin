import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatRipple } from '@angular/material/core';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'app-avg-click-rate-widget',
  standalone: true,
  imports: [
    MatIcon,
    MatRipple,
    MatTooltip
  ],
  templateUrl: './avg-click-rate-widget.component.html',
  styleUrl: './avg-click-rate-widget.component.scss'
})
export class AvgClickRateWidgetComponent {

}
