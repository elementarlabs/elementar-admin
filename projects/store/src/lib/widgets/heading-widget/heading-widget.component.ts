import { Component, inject, input, OnInit } from '@angular/core';
import { DASHBOARD, Dashboard, Widget } from '@elementar/components/dashboard';
import { RouterLink } from '@angular/router';

export interface HeadingWidget extends Widget {
  title: string;
  viewMore?: {
    link: string;
    name: string;
    external: boolean;
  }
}

@Component({
  selector: 'emr-heading-widget',
  imports: [
    RouterLink
  ],
  templateUrl: './heading-widget.component.html',
  styleUrl: './heading-widget.component.css'
})
export class HeadingWidgetComponent implements OnInit {
  private _dashboard = inject<Dashboard>(DASHBOARD, { optional: true });

  widget = input.required<HeadingWidget>();

  ngOnInit() {
    if (this._dashboard && this.widget()) {
      this._dashboard.markWidgetAsLoaded(this.widget()?.id);
    }
  }

  protected get external(): boolean {
    return this.widget().viewMore?.external || false;
  }
}
