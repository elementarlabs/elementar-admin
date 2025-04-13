import { Component, inject, input } from '@angular/core';
import { MatRipple } from '@angular/material/core';
import { SidebarNavApiService } from '@elementar-ui/components/sidebar/sidebar-nav-api.service';

@Component({
  selector: 'emr-sidebar-nav-group-toggle',
  imports: [
  ],
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

  for = input<any>(Math.random());

  get active(): boolean {
    return this.api.isGroupActive(this.for());
  }

  toggle(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.api.toggleGroup(this.for());
  }
}
