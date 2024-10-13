import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatRipple } from '@angular/material/core';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'emr-unique-visitors-widget',
  standalone: true,
  imports: [
    MatIcon,
    MatRipple,
    MatTooltip
  ],
  templateUrl: './unique-visitors-widget.component.html',
  styleUrl: './unique-visitors-widget.component.scss'
})
export class UniqueVisitorsWidgetComponent {

}
