import { Component, inject, input, OnInit } from '@angular/core';
import { DASHBOARD, Widget } from '@elementar/components/dashboard';

@Component({
  selector: 'emr-bank-account-card',
  standalone: true,
  imports: [],
  templateUrl: './bank-account-card.component.html',
  styleUrl: './bank-account-card.component.scss'
})
export class BankAccountCardComponent implements OnInit {
  private _dashboard = inject<any>(DASHBOARD, { optional: true });

  widget = input<Widget>();

  ngOnInit() {
    if (this._dashboard && this.widget()) {
      this._dashboard.markWidgetAsLoaded(this.widget()?.id);
    }
  }
}
