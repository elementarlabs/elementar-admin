import { Component, inject, input, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatButton, MatIconButton } from '@angular/material/button';
import { Dashboard, DASHBOARD, Widget } from '@elementar/components/dashboard';

@Component({
  selector: 'emr-today-sales-widget',
  standalone: true,
  imports: [
    MatIcon,
    MatIconButton,
    MatButton
  ],
  templateUrl: './today-sales-widget.component.html',
  styleUrl: './today-sales-widget.component.scss'
})
export class TodaySalesWidgetComponent implements OnInit {
  private _dashboard = inject<Dashboard>(DASHBOARD, { optional: true });

  widget = input<Widget>();

  ngOnInit() {
    if (this._dashboard && this.widget()) {
      this._dashboard.markWidgetAsLoaded(this.widget()?.id);
    }
  }
}
