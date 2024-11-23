import { booleanAttribute, Component, Input } from '@angular/core';

@Component({
    selector: 'emr-panel',
    exportAs: 'emrPanel',
    templateUrl: './panel.component.html',
    styleUrls: ['./panel.component.scss'],
    host: {
        'class': 'emr-panel',
        '[class.is-absolute]': 'absolute'
    },
    standalone: false
})
export class PanelComponent {
  @Input({ transform: booleanAttribute })
  absolute = false
}
