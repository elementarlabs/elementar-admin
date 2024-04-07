import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatRipple } from '@angular/material/core';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'app-total-revenue-widget',
  standalone: true,
  imports: [
    MatIcon,
    MatRipple,
    MatTooltip
  ],
  templateUrl: './total-revenue-widget.component.html',
  styleUrl: './total-revenue-widget.component.scss'
})
export class TotalRevenueWidgetComponent {

}
