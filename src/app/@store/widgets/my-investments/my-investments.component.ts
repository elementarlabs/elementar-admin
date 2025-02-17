import { Component, inject, input, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatRipple } from '@angular/material/core';
import { RouterLink } from '@angular/router';
import { MatList, MatListItem } from '@angular/material/list';
import { DASHBOARD, Widget } from '@elementar-ui/components';

@Component({
  selector: 'emr-my-investments',
  imports: [
    MatIcon,
    MatRipple,
    RouterLink,
    MatListItem,
    MatList
  ],
  templateUrl: './my-investments.component.html',
  styleUrl: './my-investments.component.scss'
})
export class MyInvestmentsComponent implements OnInit {
  private _dashboard = inject<any>(DASHBOARD, { optional: true });

  widget = input<Widget>();

  ngOnInit() {
    if (this._dashboard && this.widget()) {
      this._dashboard.markWidgetAsLoaded(this.widget()?.id);
    }
  }
}
