import { Component } from '@angular/core';
import { TAB_PANEL_ASIDE } from '../types';

@Component({
  selector: 'emr-tab-panel-aside',
  exportAs: 'emrTabPanelAside',
  templateUrl: './tab-panel-aside.component.html',
  styleUrls: ['./tab-panel-aside.component.css'],
  providers: [
    {
      provide: TAB_PANEL_ASIDE,
      useExisting: TabPanelAsideComponent
    }
  ],
  host: {
    'class': 'emr-tab-panel-aside'
  }
})
export class TabPanelAsideComponent {
  nextId = 0;
}
