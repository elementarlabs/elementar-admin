import { Component } from '@angular/core';

@Component({
  selector: 'emr-tab-panel-header',
  exportAs: 'emrTabPanelHeader',
  templateUrl: './tab-panel-header.component.html',
  styleUrl: './tab-panel-header.component.scss',
  host: {
    'class': 'emr-tab-panel-header'
  }
})
export class TabPanelHeaderComponent {
}
