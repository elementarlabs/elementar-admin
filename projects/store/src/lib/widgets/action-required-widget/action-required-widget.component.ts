import { Component, inject, input, OnInit } from '@angular/core';
import { DASHBOARD, Dashboard, Widget } from '@elementar-ui/components';
import { ActionRequiredComponent } from '@elementar-ui/components';

export interface ActionRequiredWidget extends Widget {
  iconName?: string;
  description: string;
  buttonText: string;
  actionText: string;
}

@Component({
  selector: 'emr-action-required-widget',
  exportAs: 'emrActionRequiredWidget',
  imports: [
    ActionRequiredComponent
  ],
  templateUrl: './action-required-widget.component.html',
  styleUrl: './action-required-widget.component.css',
  host: {
    'class': 'emr-action-required-widget'
  }
})
export class ActionRequiredWidgetComponent implements OnInit {
  private _dashboard = inject<Dashboard>(DASHBOARD, { optional: true });

  widget = input<ActionRequiredWidget>();

  ngOnInit() {
    if (this._dashboard && this.widget()) {
      this._dashboard.markWidgetAsLoaded(this.widget()?.id);
    }
  }
}
