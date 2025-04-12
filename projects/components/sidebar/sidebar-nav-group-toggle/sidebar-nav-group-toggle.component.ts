import { Component, contentChild, inject, input, TemplateRef } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { NavigationGroupToggleIconDirective } from '@elementar-ui/components/navigation';
import { MatRipple } from '@angular/material/core';
import { SidebarNavApiService } from '@elementar-ui/components/sidebar/sidebar-nav-api.service';

@Component({
  selector: 'emr-sidebar-nav-group-toggle',
  imports: [
    NgTemplateOutlet
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

  readonly iconRef = contentChild(NavigationGroupToggleIconDirective);

  for = input<any>();

  get active(): boolean {
    return this.api.isGroupActive(this.for());
  }

  toggle(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.api.toggleGroup(this.for());
  }

  protected get iconRefTemplate(): TemplateRef<any> {
    return this.iconRef()?.templateRef as TemplateRef<any>;
  }
}
