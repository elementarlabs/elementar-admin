import { Directive } from '@angular/core';

@Directive({
  selector: '[emrTabPanelItemIcon]',
  exportAs: 'emrTabPanelItemIcon',
  host: {
    'class': 'emr-tab-panel-item-icon'
  }
})
export class TabPanelItemIconDirective {
}
