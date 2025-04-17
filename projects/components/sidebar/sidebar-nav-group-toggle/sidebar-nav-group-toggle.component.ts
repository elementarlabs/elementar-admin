import { Component, inject, input, signal } from '@angular/core';
import { MatRipple } from '@angular/material/core';
import { SidebarNavApiService } from '../sidebar-nav-api.service';

@Component({
  selector: 'emr-sidebar-nav-group-toggle',
  exportAs: 'emrSidebarNavGroupToggle',
  templateUrl: './sidebar-nav-group-toggle.component.html',
  styleUrl: './sidebar-nav-group-toggle.component.scss',
  hostDirectives: [
    MatRipple
  ],
  host: {
    'class': 'emr-sidebar-nav-group-toggle',
    '[class.is-active]': 'active',
    '(click)': 'toggle($event)'
  }
})
export class SidebarNavGroupToggleComponent {
  readonly api = inject(SidebarNavApiService);

  readonly for = signal<any>(null);

  get active(): boolean {
    if (!this.for()) {
      return false;
    }

    return this.api.isGroupActive(this.for());
  }

  toggle(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.api.toggleGroup(this.for());
  }
}
