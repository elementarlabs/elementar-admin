import { Component, inject, input, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { DASHBOARD, DashboardWidgetConfig } from '@elementar/components/dashboard';

@Component({
  selector: 'emr-payment-information-widget',
  standalone: true,
  imports: [
    MatButton,
    RouterLink
  ],
  templateUrl: './payment-information-widget.component.html',
  styleUrl: './payment-information-widget.component.scss'
})
export class PaymentInformationWidgetComponent implements OnInit {
  private _dashboard = inject<any>(DASHBOARD, { optional: true });

  widget = input<DashboardWidgetConfig>();

  ngOnInit() {
    if (this._dashboard && this.widget()) {
      this._dashboard.setWidgetLoaded(this.widget()?.id);
    }
  }
}
