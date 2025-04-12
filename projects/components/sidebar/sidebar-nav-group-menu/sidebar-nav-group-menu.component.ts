import { ChangeDetectorRef, Component, contentChildren, DestroyRef, inject, input } from '@angular/core';
import { NavigationItemComponent } from '@elementar-ui/components/navigation';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { SidebarNavApiService } from '@elementar-ui/components/sidebar/sidebar-nav-api.service';

@Component({
  selector: 'emr-sidebar-nav-group-menu',
  imports: [],
  templateUrl: './sidebar-nav-group-menu.component.html',
  styleUrl: './sidebar-nav-group-menu.component.scss'
})
export class SidebarNavGroupMenuComponent {
  readonly api = inject(SidebarNavApiService);
  private _cdr = inject(ChangeDetectorRef);
  private _destroyRef = inject(DestroyRef);

  readonly _items = contentChildren(NavigationItemComponent, { descendants: true });

  key = input<any>();

  get active(): boolean {
    return this.api.isGroupActive(this.key());
  }

  ngAfterContentInit() {
    this._detectGroupIsActive();
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
