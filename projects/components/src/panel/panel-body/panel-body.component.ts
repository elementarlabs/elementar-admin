import { Component } from '@angular/core';

@Component({
    selector: 'emr-panel-body',
    exportAs: 'emrPanelBody',
    templateUrl: './panel-body.component.html',
    styleUrls: ['./panel-body.component.scss'],
    host: {
        'class': 'emr-panel-body'
    },
    standalone: false
})
export class PanelBodyComponent {
}
