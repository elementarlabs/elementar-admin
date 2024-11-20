import { Component, inject, input, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { DASHBOARD, DashboardWidgetConfig } from '@elementar/components/dashboard';

@Component({
  selector: 'emr-customer-satisfaction-widget',
  standalone: true,
  imports: [
    MatIcon
  ],
  templateUrl: './customer-satisfaction-widget.component.html',
  styleUrl: './customer-satisfaction-widget.component.scss'
})
export class CustomerSatisfactionWidgetComponent implements OnInit {
  private _dashboard = inject<any>(DASHBOARD, { optional: true });

  widget = input<DashboardWidgetConfig>();

  ngOnInit() {
    if (this._dashboard && this.widget()) {
      this._dashboard.setWidgetLoaded(this.widget()?.id);
    }
  }
}
