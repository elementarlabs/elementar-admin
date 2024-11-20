import { Component, inject, input, OnInit } from '@angular/core';
import { DASHBOARD, DashboardWidgetConfig } from '@elementar/components/dashboard';

@Component({
  selector: 'emr-bank-credit-card',
  standalone: true,
  imports: [],
  templateUrl: './bank-credit-card.component.html',
  styleUrl: './bank-credit-card.component.scss'
})
export class BankCreditCardComponent implements OnInit {
  private _dashboard = inject<any>(DASHBOARD, { optional: true });

  widget = input<DashboardWidgetConfig>();

  ngOnInit() {
    if (this._dashboard && this.widget()) {
      this._dashboard.setWidgetLoaded(this.widget()?.id);
    }
  }
}
