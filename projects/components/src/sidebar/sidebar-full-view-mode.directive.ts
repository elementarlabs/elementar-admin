import { Directive } from '@angular/core';

@Directive({
  selector: '[emrSidebarFullViewMode]',
  exportAs: 'emrSidebarFullViewMode',
  standalone: true,
  host: {
    'class': 'emr-sidebar-full-view-mode',
  }
})
export class SidebarFullViewModeDirective {

}
