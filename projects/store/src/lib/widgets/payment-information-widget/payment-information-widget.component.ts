import { Component, inject, input, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { DASHBOARD, Widget } from '@elementar/components/dashboard';

@Component({
    selector: 'emr-payment-information-widget',
    imports: [
        MatButton,
        RouterLink
    ],
    templateUrl: './payment-information-widget.component.html',
    styleUrl: './payment-information-widget.component.scss'
})
export class PaymentInformationWidgetComponent implements OnInit {
  private _dashboard = inject<any>(DASHBOARD, { optional: true });

  widget = input<Widget>();

  ngOnInit() {
    if (this._dashboard && this.widget()) {
      this._dashboard.markWidgetAsLoaded(this.widget()?.id);
    }
  }
}
