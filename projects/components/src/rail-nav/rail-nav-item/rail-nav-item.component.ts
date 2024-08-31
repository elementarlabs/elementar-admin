import { Component, inject, input, OnInit } from '@angular/core';
import { RAIL_NAV, RailNavApi } from '@elementar/components/rail-nav/types';
import { v7 as uuid } from 'uuid';

@Component({
  selector: 'emr-rail-nav-item,[emr-rail-nav-item]',
  exportAs: 'emrRailNavItem',
  standalone: true,
  imports: [],
  templateUrl: './rail-nav-item.component.html',
  styleUrl: './rail-nav-item.component.scss',
  host: {
    'class': 'emr-rail-nav-item',
    '[class.selected]': 'selected',
  }
})
export class RailNavItemComponent implements OnInit {
  protected _railNav = inject<RailNavApi>(RAIL_NAV);

  key = input(uuid());

  get selected() {
    if (!this.key() || !this._railNav.activeKey()) {
      return false;
    }

    return this.key() === this._railNav.activeKey();
  }

  ngOnInit() {
    console.log(this.key());
    console.log(this._railNav.activeKey());
  }
}
