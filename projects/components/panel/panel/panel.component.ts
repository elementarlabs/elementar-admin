import { booleanAttribute, Component, input } from '@angular/core';

@Component({
  selector: 'emr-panel',
  exportAs: 'emrPanel',
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.scss',
  host: {
    'class': 'emr-panel',
    '[class.is-absolute]': 'absolute()'
  }
})
export class PanelComponent {
  absolute = input(false, {
    transform: booleanAttribute
  });
}
