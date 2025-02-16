import { Component, inject, input, OnInit } from '@angular/core';
import { AvatarComponent, AvatarGroupComponent, AvatarTotalComponent } from '@elementar-ui/components';
import { Dashboard, DASHBOARD, Widget } from '@elementar-ui/components';

@Component({
    selector: 'emr-events-widget',
    templateUrl: './events-widget.component.html',
    imports: [
        AvatarGroupComponent,
        AvatarComponent,
        AvatarTotalComponent
    ],
    styleUrl: './events-widget.component.scss'
})
export class EventsWidgetComponent implements OnInit {
  private _dashboard = inject<Dashboard>(DASHBOARD, { optional: true });

  widget = input<Widget>();

  ngOnInit() {
    if (this._dashboard && this.widget()) {
      this._dashboard.markWidgetAsLoaded(this.widget()?.id);
    }
  }
}
