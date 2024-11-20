import { Component, inject, input, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { DASHBOARD, DashboardWidgetConfig } from '@elementar/components/dashboard';

@Component({
  selector: 'emr-current-plan-widget',
  standalone: true,
  imports: [
    MatButton,
    RouterLink
  ],
  templateUrl: './current-plan-widget.component.html',
  styleUrl: './current-plan-widget.component.scss'
})
export class CurrentPlanWidgetComponent implements OnInit {
  private _dashboard = inject<any>(DASHBOARD, { optional: true });

  widget = input<DashboardWidgetConfig>();

  ngOnInit() {
    if (this._dashboard && this.widget()) {
      this._dashboard.setWidgetLoaded(this.widget()?.id);
    }
  }
}
