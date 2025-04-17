import { Directive } from '@angular/core';

@Directive({
  selector: '[emrSidebarFullViewMode]',
  exportAs: 'emrSidebarFullViewMode',
  host: {
    'class': 'emr-sidebar-full-view-mode',
  }
})
export class SidebarFullViewModeDirective {

}
