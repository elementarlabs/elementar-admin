import { Component, inject, contentChild, TemplateRef } from '@angular/core';
import { NavigationApiService } from '../navigation-api.service';
import { NavigationGroupToggleIconDirective } from '../navigation-group-toggle-icon.directive';
import { MatRipple } from '@angular/material/core';
import { NgTemplateOutlet } from '@angular/common';
import { NAVIGATION_GROUP } from '../types';
import { NavigationGroupComponent } from '../navigation-group/navigation-group.component';

@Component({
  selector: 'emr-navigation-group-toggle',
  exportAs: 'emrNavigationGroupToggle',
  imports: [
    NgTemplateOutlet
  ],
  templateUrl: './navigation-group-toggle.component.html',
  styleUrl: './navigation-group-toggle.component.scss',
  hostDirectives: [
    MatRipple
  ],
  host: {
    'class': 'emr-navigation-group-toggle',
    '[class.is-active]': 'active',
    '(click)': 'toggle($event)'
  }
})
export class NavigationGroupToggleComponent {
  private _group = inject<NavigationGroupComponent>(NAVIGATION_GROUP);
  readonly api = inject(NavigationApiService);

  readonly iconRef = contentChild(NavigationGroupToggleIconDirective);

  get active(): boolean {
    return this.api.isGroupActive(this._group.key());
  }

  toggle(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.api.toggleGroup(this._group.key());
  }

  protected get iconRefTemplate(): TemplateRef<any> {
    return this.iconRef()?.templateRef as TemplateRef<any>;
  }
}
