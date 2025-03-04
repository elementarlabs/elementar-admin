import { Component, inject, input } from '@angular/core';
import { TabPanelApiService } from '../tab-panel-api.service';

@Component({
  selector: 'emr-tab-panel-custom-item',
  exportAs: 'emrTabPanelCustomItem',
  templateUrl: './tab-panel-custom-item.component.html',
  styleUrl: './tab-panel-custom-item.component.scss',
  host: {
    'class': 'emr-tab-panel-custom-item',
    '(click)': '_handleClick()'
  }
})
export class TabPanelCustomItemComponent {
  readonly api = inject(TabPanelApiService);

  for = input<any>();

  protected _handleClick() {
    if (!this.for()) {
      return;
    }

    this.api.activate(this.for());
  }
}
