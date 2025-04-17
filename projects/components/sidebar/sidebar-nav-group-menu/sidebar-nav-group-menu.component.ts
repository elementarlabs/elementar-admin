import {
  AfterContentInit,
  ChangeDetectorRef,
  Component,
  contentChildren,
  DestroyRef,
  inject,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { SidebarNavApiService } from '../sidebar-nav-api.service';
import { SIDEBAR_NAVIGATION, SIDEBAR_NAVIGATION_GROUP } from '../types';
import { SidebarNavComponent } from '../sidebar-nav/sidebar-nav.component';
import { SidebarNavGroupComponent } from '../sidebar-nav-group/sidebar-nav-group.component';
import { SidebarNavItemComponent } from '../sidebar-nav-item/sidebar-nav-item.component';

@Component({
  selector: 'emr-sidebar-nav-group-menu',
  exportAs: 'emrSidebarNavGroupMenu',
  templateUrl: './sidebar-nav-group-menu.component.html',
  styleUrl: './sidebar-nav-group-menu.component.scss',
  host: {
    'class': 'emr-sidebar-nav-group-menu',
    '[class.is-active]': 'active'
  }
})
export class SidebarNavGroupMenuComponent implements AfterContentInit {
  readonly navigation = inject<SidebarNavComponent>(SIDEBAR_NAVIGATION);
  readonly api = inject(SidebarNavApiService);
  private _group = inject<SidebarNavGroupComponent>(SIDEBAR_NAVIGATION_GROUP);
  private _cdr = inject(ChangeDetectorRef);
  private _destroyRef = inject(DestroyRef);

  readonly _items = contentChildren(SidebarNavItemComponent, { descendants: true });

  key = signal<any>(this._group._groupId);

  get active(): boolean {
    return this.api.isGroupActive(this.key());
  }

  ngAfterContentInit() {
    const isGroupActive = this._items().filter(
      itemComponent => itemComponent.active
    ).length > 0;

    if (isGroupActive) {
      this.api.showGroup(this.key());
    }

    this.api
      .activeItemChanged()
      .pipe(takeUntilDestroyed(this._destroyRef))
      .subscribe(() => {
        this._detectGroupIsActive();
      })
    ;
  }

  private _detectGroupIsActive() {
    const isGroupActive = this._items().filter(
      itemComponent => this.api.isItemActive(itemComponent.key())
    ).length > 0;

    if (isGroupActive) {
      if (!this.api.isGroupActive(this.key())) {
        this.api.showGroup(this.key());
      }
    } else {
      if (this.api.isGroupActive(this.key())) {
        this.api.hideGroup();
      }
    }

    this._cdr.markForCheck();
  }
}
