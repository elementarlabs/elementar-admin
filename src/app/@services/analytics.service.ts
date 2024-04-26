import { inject, Injectable } from '@angular/core';
import { filter } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

declare const gtag: any;

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  private _router = inject(Router);
  private _document = inject(DOCUMENT);
  private readonly _enabled: boolean;

  trackPageViews(): void {
    if (typeof gtag !== 'undefined') {
      if (this._document.location.hostname === 'localhost') {
        return;
      }

      this._router.events.pipe(
        filter((event) => event instanceof NavigationEnd),
      )
        .subscribe((event: any) => {
          gtag('event', 'page_view', {
            page_title: this._document.head.title,
            page_path: event.urlAfterRedirects,
            page_location: this._document.location.href
          });
        });
    }
  }
}
