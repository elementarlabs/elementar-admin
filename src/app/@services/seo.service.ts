import { DestroyRef, inject, Injectable, PLATFORM_ID } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { DOCUMENT, isPlatformBrowser, isPlatformServer } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private readonly _router = inject(Router);
  private readonly _destroyRef = inject(DestroyRef);
  private readonly _document = inject(DOCUMENT);
  private readonly _platformId = inject(PLATFORM_ID);
  private _linkCanonical: HTMLLinkElement | null;

  trackCanonicalChanges(): void {
    this._createCanonicalTag();

    if (isPlatformServer(this._platformId)) {
      return;
    }

    this._router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      takeUntilDestroyed(this._destroyRef),
    )
      .subscribe(() => {
        this._linkCanonical?.setAttribute('href', this.getCanonicalUrl());
      });
  }

  private getCanonicalUrl(): string {
    if (this._document.URL.startsWith('http')) {
      return this._document.URL;
    }

    return environment.siteUrl + this._document.URL;
  }

  private _createCanonicalTag(): void {
    this._linkCanonical = this._document.querySelector('link[rel="canonical"]');

    if (!this._linkCanonical) {
      this._linkCanonical = this._document.createElement('link');
      this._linkCanonical.setAttribute('rel', 'canonical');
      this._document.head.appendChild(this._linkCanonical);
    }

    console.log(this.getCanonicalUrl());

    this._linkCanonical.setAttribute('href', this.getCanonicalUrl());
  }
}
