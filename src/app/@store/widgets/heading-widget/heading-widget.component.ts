import { Component, inject, input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DASHBOARD, Dashboard, Widget } from '@elementar-ui/components/dashboard';

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
