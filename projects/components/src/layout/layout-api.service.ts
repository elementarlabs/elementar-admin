import { EventEmitter, inject, Injectable } from '@angular/core';
import { LayoutSidebarVisibilityChange } from './types';
import { LayoutSidebarStore } from './layout.store';

@Injectable({
  providedIn: 'root'
})
export class LayoutApiService {
  private _ayoutSidebarStore = inject<any>(LayoutSidebarStore);
  readonly sidebarVisibility = new EventEmitter<LayoutSidebarVisibilityChange>();

  hideSidebar(layoutId: string): void {
    this._ayoutSidebarStore.showSidebarVisibility(layoutId, false);
    this.sidebarVisibility.emit({
      layoutId,
      shown: false
    });
  }

  showSidebar(layoutId: string): void {
    this._ayoutSidebarStore.showSidebarVisibility(layoutId, true);
    this.sidebarVisibility.emit({
      layoutId,
      shown: true
    });
  }

  isSidebarShown(layoutId: string): boolean {
    return this._ayoutSidebarStore[layoutId]();
  }
}
