import { Component } from '@angular/core';

@Component({
  selector: 'emr-tab-panel-header',
  exportAs: 'emrTabPanelHeader',
  templateUrl: './tab-panel-header.component.html',
  styleUrls: ['./tab-panel-header.component.css'],
  host: {
    'class': 'emr-tab-panel-header'
  }
})
export class TabPanelHeaderComponent {
}
