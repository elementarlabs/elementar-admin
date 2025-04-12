import { booleanAttribute, Component, contentChild, ElementRef, inject, input, TemplateRef } from '@angular/core';
import { MatRipple } from '@angular/material/core';
import { NgTemplateOutlet } from '@angular/common';
import { SidebarNavApiService } from '@elementar-ui/components/sidebar/sidebar-nav-api.service';
import { NAVIGATION } from '@elementar-ui/components/sidebar/types';
import { SidebarNavComponent, SidebarNavItemIconDirective } from '@elementar-ui/components/sidebar';

@Component({
  selector: 'emr-sidebar-nav-item,[emr-sidebar-nav-item]',
  exportAs: 'emr-sidebar-nav-item',
  imports: [
    MatRipple,
    NgTemplateOutlet
  ],
  templateUrl: './sidebar-nav-item.component.html',
  styleUrl: './sidebar-nav-item.component.scss',
  host: {
    'class': 'emr-sidebar-nav-item',
  }
})
export class SidebarNavItemComponent {
  private _navigation = inject<SidebarNavComponent<any>>(NAVIGATION);
  private _api = inject(SidebarNavApiService);
  private _elementRef = inject(ElementRef);

  readonly iconRef = contentChild(SidebarNavItemIconDirective);

  get api() {
    return {
      isActive: () => this.active
    }
  }

  key = input<any>(Math.random());
  forceActive = input(false, {
    transform: booleanAttribute
  });

  click(event: MouseEvent) {
    if (!this.key()) {
      return;
    }

    this._navigation.itemClicked.emit(this.key());
    this._api.activateItem(this.key());
  }

  get active(): boolean {
    return this._api.isItemActive(this.key());
  }

  get _hostElement(): ElementRef {
    return this._elementRef;
  }

  protected get iconRefTemplate(): TemplateRef<any> {
    return this.iconRef()?.templateRef as TemplateRef<any>;
  }
}
