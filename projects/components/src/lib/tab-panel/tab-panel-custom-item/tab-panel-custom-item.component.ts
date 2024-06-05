import { Component, HostListener, inject, Input } from '@angular/core';
import { TabPanelApiService } from '../tab-panel-api.service';
import { TabPanelNavComponent } from '@elementar/components';
import { TAB_PANEL_NAV } from '../types';

@Component({
  selector: 'emr-tab-panel-custom-item',
  exportAs: 'emrTabPanelCustomItem',
  templateUrl: './tab-panel-custom-item.component.html',
  styleUrl: './tab-panel-custom-item.component.scss'
})
export class TabPanelCustomItemComponent {
  readonly api = inject(TabPanelApiService);
  private _nav = inject<TabPanelNavComponent>(TAB_PANEL_NAV, { optional: true });

  @Input()
  for: any = this._nav ? this._nav.nextId++ : null;

  @HostListener('click')
  private _handleClick() {
    if (!this.for) {
      return;
    }

    this.api.activate(this.for);
  }
}
