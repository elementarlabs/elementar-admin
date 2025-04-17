import { Directive } from '@angular/core';

@Directive({
  selector: '[emrSidebarCompactViewMode]',
  exportAs: 'emrSidebarCompactViewMode',
  host: {
    'class': 'emr-sidebar-compact-view-mode',
  }
})
export class SidebarCompactViewModeDirective {
}
