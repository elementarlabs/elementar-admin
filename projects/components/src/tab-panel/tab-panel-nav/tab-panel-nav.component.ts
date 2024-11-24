import { Component } from '@angular/core';
import { TAB_PANEL_NAV } from '../types';

@Component({
    selector: 'emr-tab-panel-nav',
    exportAs: 'emrTabPanelNav',
    templateUrl: './tab-panel-nav.component.html',
    styleUrls: ['./tab-panel-nav.component.scss'],
    providers: [
        {
            provide: TAB_PANEL_NAV,
            useExisting: TabPanelNavComponent
        }
    ],
    host: {
        'class': 'emr-tab-panel-nav'
    }
})
export class TabPanelNavComponent {
  nextId = 0;
}
