import { booleanAttribute, Component, ElementRef, inject, input } from '@angular/core';
import { MatRipple } from '@angular/material/core';
import { SIDEBAR_NAVIGATION } from '../types';
import { SidebarNavComponent } from '../sidebar-nav/sidebar-nav.component';
import { SidebarNavStore } from '../sidebar.store';

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
  private _elementRef = inject(ElementRef);
  private _navStore = inject(SidebarNavStore);

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
    this._navStore.setItemActiveKey(this.key());
  }

  get active(): boolean {
    return this._navStore.isItemActive(this.key());
  }

  get _hostElement(): ElementRef {
    return this._elementRef;
  }
}
