import {
  AfterContentInit,
  ChangeDetectorRef,
  Component,
  contentChildren,
  DestroyRef,
  inject,
  input, TemplateRef
} from '@angular/core';
import { NavigationItemComponent } from '@elementar-ui/components/navigation';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { SidebarNavApiService } from '@elementar-ui/components/sidebar/sidebar-nav-api.service';
import { SidebarNavComponent, SidebarNavItemDefDirective } from '@elementar-ui/components/sidebar';
import { NgTemplateOutlet } from '@angular/common';
import { NAVIGATION } from '@elementar-ui/components/sidebar/types';

@Component({
  selector: 'emr-sidebar-nav-group-menu',
  imports: [
    NgTemplateOutlet
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
  private _cdr = inject(ChangeDetectorRef);
  private _destroyRef = inject(DestroyRef);

  readonly _items = contentChildren(NavigationItemComponent, { descendants: true });

  key = input<any>();

  private _navItemDefs = contentChildren(SidebarNavItemDefDirective);

  activeKey = input();
  navItems = input<any[]>([]);

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

  // getTemplate(item: any): TemplateRef<any> {
  //   for (let navItemDef of this.navigation.navItemDefs()) {
  //     const isFn = navItemDef.emrSidebarNavItemDefIs();
  //
  //     if (isFn && isFn(item)) {
  //       return navItemDef.templateRef;
  //     }
  //   }
  //
  //   return this._navItemDefs()[0].templateRef;
  // }

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
