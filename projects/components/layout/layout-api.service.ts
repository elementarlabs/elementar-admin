import { EventEmitter, inject, Injectable } from '@angular/core';
import { LayoutSidebarVisibilityChange } from './types';
import { LayoutSidebarStore } from './layout.store';

@Injectable({
  providedIn: 'root'
})
export class LayoutApiService {
  private _layoutSidebarStore = inject<any>(LayoutSidebarStore);
  readonly sidebarVisibility = new EventEmitter<LayoutSidebarVisibilityChange>();

  hideSidebar(layoutId: string): void {
    this._layoutSidebarStore.showSidebarVisibility(layoutId, false);
    this.sidebarVisibility.emit({
      layoutId,
      shown: false
    });
  }

  showSidebar(layoutId: string): void {
    this._layoutSidebarStore.showSidebarVisibility(layoutId, true);
    this.sidebarVisibility.emit({
      layoutId,
      shown: true
    });
  }

  toggleSidebar(layoutId: string): void {
    this.isSidebarShown(layoutId) ? this.hideSidebar(layoutId) : this.showSidebar(layoutId);
  }

  isSidebarShown(layoutId: string): boolean {
    return this._layoutSidebarStore[layoutId]();
  }
}
