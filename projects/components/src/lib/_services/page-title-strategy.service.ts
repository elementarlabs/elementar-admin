import { inject, Injectable } from '@angular/core';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class PageTitleStrategyService extends TitleStrategy {
  private _title = inject(Title);

  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);

    if (title !== undefined) {
      this._title.setTitle(`${title} | Elementar Admin`);
    } else {
      this._title.setTitle('Elementar Admin');
    }
  }
}
