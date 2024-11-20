import { Component, inject, input, OnInit } from '@angular/core';
import { AvatarComponent, AvatarGroupComponent, AvatarTotalComponent } from '@elementar/components/avatar';
import { DASHBOARD, DashboardWidgetConfig } from '@elementar/components/dashboard';

@Component({
  selector: 'emr-events-widget',
  standalone: true,
  templateUrl: './events-widget.component.html',
  imports: [
    AvatarGroupComponent,
    AvatarComponent,
    AvatarTotalComponent
  ],
  styleUrl: './events-widget.component.scss'
})
export class EventsWidgetComponent implements OnInit {
  private _dashboard = inject<any>(DASHBOARD, { optional: true });

  widget = input<DashboardWidgetConfig>();

  ngOnInit() {
    if (this._dashboard && this.widget()) {
      this._dashboard.setWidgetLoaded(this.widget()?.id);
    }
  }
}
