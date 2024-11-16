import { AfterContentInit, Component, contentChildren, input, TemplateRef } from '@angular/core';
import { DashboardWidget, DashboardWidgetDefDirective } from '@elementar/components/dashboard';
import { MatGridList, MatGridTile } from '@angular/material/grid-list';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'emr-dashboard',
  exportAs: 'emrDashboard',
  standalone: true,
  imports: [
    MatGridList,
    MatGridTile,
    NgTemplateOutlet
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  host: {
    'class': 'emr-dashboard'
  }
})
export class DashboardComponent implements AfterContentInit {
  private _widgetDefs = contentChildren(DashboardWidgetDefDirective);
  protected _initialized = false;
  protected _map = new Map<string, TemplateRef<any>>();

  widgets = input<DashboardWidget[]>([]);

  ngAfterContentInit() {
    this._widgetDefs().forEach(widgetDef => {
      this._map.set(widgetDef.emrDashboardWidgetDef(), widgetDef.templateRef);
    });
    this._initialized = true;
  }

  getTemplateRefByType(type: string): TemplateRef<any> {
    return this._map.get(type) as TemplateRef<any>;
  }
}
