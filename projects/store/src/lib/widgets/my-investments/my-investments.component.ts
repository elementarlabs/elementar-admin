import { Component, inject, input, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatRipple } from '@angular/material/core';
import { MatTooltip } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import { MatList, MatListItem } from '@angular/material/list';
import { DASHBOARD, DashboardWidgetConfig } from '@elementar/components/dashboard';

@Component({
  selector: 'emr-my-investments',
  standalone: true,
  imports: [
    MatIcon,
    MatRipple,
    MatTooltip,
    RouterLink,
    MatListItem,
    MatList
  ],
  templateUrl: './my-investments.component.html',
  styleUrl: './my-investments.component.scss'
})
export class MyInvestmentsComponent implements OnInit {
  private _dashboard = inject<any>(DASHBOARD, { optional: true });

  widget = input<DashboardWidgetConfig>();

  ngOnInit() {
    if (this._dashboard && this.widget()) {
      this._dashboard.setWidgetLoaded(this.widget()?.id);
    }
  }
}
