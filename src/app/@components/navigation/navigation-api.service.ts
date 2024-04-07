import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class NavigationApiService {
  private _activeGroup$ = new BehaviorSubject(null);
  private _activeItem$ = new BehaviorSubject(null);

  activeItemChanged(): BehaviorSubject<any> {
    return this._activeItem$;
  }

  toggleGroup(key: any) {
    if (this.isGroupActive(key)) {
      this.hideGroup();
    } else {
      this.showGroup(key);
    }
  }

  showGroup(key: any): void {
    this._activeGroup$.next(key);
  }

  hideGroup() {
    this._activeGroup$.next(null);
  }

  isGroupActive(key: any): boolean {
    return this._activeGroup$.value === key;
  }

  isItemActive(key: any): boolean {
    return this._activeItem$.value === key;
  }

  activateItem(key: any) {
    this._activeItem$.next(key);
  }
}
