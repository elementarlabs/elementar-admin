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
import { SidebarNavApiService } from '@elementar-ui/components/sidebar/sidebar-nav-api.service';
import {
  SIDEBAR_NAVIGATION_GROUP,
  SidebarNavComponent,
  SidebarNavGroupComponent, SidebarNavItemComponent
} from '@elementar-ui/components/sidebar';
import { NAVIGATION } from '@elementar-ui/components/sidebar/types';

@Component({
  selector: 'emr-sidebar-nav-group-menu',
  imports: [
  ],
  templateUrl: './sidebar-nav-group-menu.component.html',
  styleUrl: './sidebar-nav-group-menu.component.scss',
  host: {
    'class': 'emr-sidebar-nav-group-menu',
    '[class.is-active]': 'active'
  }
})
export class SidebarNavGroupMenuComponent implements AfterContentInit {
  readonly navigation = inject<SidebarNavComponent<any>>(NAVIGATION);
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
