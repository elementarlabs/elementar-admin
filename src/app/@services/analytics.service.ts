import { inject, Injectable } from '@angular/core';
import { filter } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';
import { Location } from '@angular/common';

declare const ga: any;

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  private _router = inject(Router);
  private _location = inject(Location);
  private readonly _enabled: boolean;

  constructor() {
    this._enabled = typeof ga !== 'undefined';
  }

  trackPageViews(): void {
    if (this._enabled) {
      this._router.events.pipe(
        filter((event) => event instanceof NavigationEnd),
      )
      .subscribe(() => {
        ga('send', {
          hitType: 'pageview',
          page: this._location.path()
        });
      });
    }
  }

  trackEvent(eventName: string): void {
    if (this._enabled) {
      ga('send', 'event', eventName);
    }
  }
}
