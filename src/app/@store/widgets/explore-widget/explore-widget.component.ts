import { Component, inject, input, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatRipple } from '@angular/material/core';
import { DASHBOARD, Dashboard, Widget } from '@elementar-ui/components/dashboard';

export interface ExploreWidget extends Widget {
  title: string;
  description: string;
  iconName: string;
}

@Component({
  selector: 'emr-explore-widget',
  exportAs: 'emrExploreWidget',
  imports: [
    MatIcon,
    MatRipple
  ],
  templateUrl: './explore-widget.component.html',
  styleUrl: './explore-widget.component.css'
})
export class ExploreWidgetComponent implements OnInit {
  private _dashboard = inject<Dashboard>(DASHBOARD, { optional: true });

  widget = input.required<ExploreWidget>();

  ngOnInit() {
    if (this._dashboard && this.widget()) {
      this._dashboard.markWidgetAsLoaded(this.widget()?.id);
    }
  }
}
