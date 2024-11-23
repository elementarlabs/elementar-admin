import { Component } from '@angular/core';

@Component({
    selector: 'emr-tab-panel-header',
    exportAs: 'emrTabPanelHeader',
    templateUrl: './tab-panel-header.component.html',
    styleUrls: ['./tab-panel-header.component.scss'],
    host: {
        'class': 'emr-tab-panel-header'
    },
    standalone: false
})
export class TabPanelHeaderComponent {
}
