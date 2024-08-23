import { Directive } from '@angular/core';

@Directive({
  selector: '[emrSidebarCompactViewMode]',
  standalone: true,
  host: {
    'class': 'emr-sidebar-compact-view-mode',
  }
})
export class SidebarCompactViewModeDirective {
}
