import { Directive } from '@angular/core';

@Directive({
  selector: '[emrSidebarCompactViewMode]',
  exportAs: 'emrSidebarCompactViewMode',
  standalone: true,
  host: {
    'class': 'emr-sidebar-compact-view-mode',
  }
})
export class SidebarCompactViewModeDirective {
}
