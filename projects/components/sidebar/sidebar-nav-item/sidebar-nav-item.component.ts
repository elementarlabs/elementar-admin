import { booleanAttribute, Component, ElementRef, inject, input } from '@angular/core';
import { MatRipple } from '@angular/material/core';
import { SidebarNavApiService } from '../sidebar-nav-api.service';
import { SIDEBAR_NAVIGATION } from '../types';
import { SidebarNavComponent } from '../sidebar-nav/sidebar-nav.component';

export class SidebarNavItem {
  active: boolean;
}

@Component({
  selector: 'emr-sidebar-nav-item,[emr-sidebar-nav-item]',
  exportAs: 'emr-sidebar-nav-item',
  imports: [
    MatRipple
  ],
  templateUrl: './sidebar-nav-item.component.html',
  styleUrl: './sidebar-nav-item.component.scss',
  host: {
    'class': 'emr-sidebar-nav-item',
    '[class.is-active]': 'forceActive() || active',
    '(click)': 'click($event)'
  }
})
export class SidebarNavItemComponent implements SidebarNavItem {
  private _navigation = inject<SidebarNavComponent>(SIDEBAR_NAVIGATION);
  private _api = inject(SidebarNavApiService);
  private _elementRef = inject(ElementRef);

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
}
