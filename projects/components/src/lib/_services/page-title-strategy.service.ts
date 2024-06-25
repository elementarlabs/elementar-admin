import { inject, Injectable } from '@angular/core';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { GlobalStore } from '../global.state';

@Injectable({
  providedIn: 'root'
})
export class PageTitleStrategyService extends TitleStrategy {
  private _title = inject(Title);
  private _globalStore = inject(GlobalStore);

  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);

    if (title !== undefined) {
      this._title.setTitle(`${title} | ${this._globalStore.pageTitle()}`);
    } else {
      this._title.setTitle(this._globalStore.pageTitle());
    }
  }
}
