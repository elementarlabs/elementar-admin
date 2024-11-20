import { Component, inject, input, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { AvatarComponent } from '@elementar/components/avatar';
import { DASHBOARD, DashboardWidgetConfig } from '@elementar/components/dashboard';

@Component({
  selector: 'emr-team-widget',
  standalone: true,
  imports: [
    MatIcon,
    MatIconButton,
    AvatarComponent
  ],
  templateUrl: './team-widget.component.html',
  styleUrl: './team-widget.component.scss'
})
export class TeamWidgetComponent implements OnInit {
  private _dashboard = inject<any>(DASHBOARD, { optional: true });

  widget = input<DashboardWidgetConfig>();

  ngOnInit() {
    if (this._dashboard && this.widget()) {
      this._dashboard.setWidgetLoaded(this.widget()?.id);
    }
  }
}
