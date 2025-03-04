import { Component, inject, input, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { DASHBOARD, Dashboard, Widget } from '@elementar-ui/components/dashboard';

@Component({
  selector: 'emr-site-visitors-widget',
  imports: [
    MatIcon
  ],
  templateUrl: './site-visitors-widget.component.html',
  styleUrl: './site-visitors-widget.component.scss'
})
export class SiteVisitorsWidgetComponent implements OnInit {
  private _dashboard = inject<Dashboard>(DASHBOARD, { optional: true });

  widget = input<Widget>();

  ngOnInit() {
    if (this._dashboard && this.widget()) {
      this._dashboard.markWidgetAsLoaded(this.widget()?.id);
    }
  }
}
