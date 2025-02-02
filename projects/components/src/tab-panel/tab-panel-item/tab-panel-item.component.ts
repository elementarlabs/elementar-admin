import { Component, inject, input } from '@angular/core';
import { TabPanelApiService } from '../tab-panel-api.service';
import { TabPanelNavComponent } from '../tab-panel-nav/tab-panel-nav.component';
import { TAB_PANEL_NAV } from '../types';
import { MatRipple } from '@angular/material/core';

@Component({
  selector: 'emr-tab-panel-item',
  exportAs: 'emrTabPanelItem',
  templateUrl: './tab-panel-item.component.html',
  styleUrl: './tab-panel-item.component.scss',
  hostDirectives: [
    MatRipple
  ],
  host: {
    'class': 'emr-tab-panel-item',
    '[class.is-active]': 'api.isActive(this.for())',
    '(click)': '_handleClick()'
  }
})
export class TabPanelItemComponent {
  readonly api = inject(TabPanelApiService);
  private _nav = inject<TabPanelNavComponent>(TAB_PANEL_NAV, { optional: true });

  for = input<any>(this._nav ? this._nav.nextId++ : null);

  protected _handleClick() {
    if (!this.for()) {
      return;
    }

    this.api.activate(this.for());
  }
}
