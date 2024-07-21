import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutApiService {
  readonly sidebarVisibility = new EventEmitter<{ layoutId: string, hidden: boolean }>();

  hideSidebar(layoutId: string): void {
    this.sidebarVisibility.emit({
      layoutId,
      hidden: true
    });
  }

  showSidebar(layoutId: string): void {
    this.sidebarVisibility.emit({
      layoutId,
      hidden: false
    });
  }
}
