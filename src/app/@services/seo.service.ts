import { DestroyRef, inject, Injectable, PLATFORM_ID } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { DOCUMENT, isPlatformBrowser, isPlatformServer } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private readonly _router = inject(Router);
  private readonly _destroyRef = inject(DestroyRef);
  private readonly _document = inject(DOCUMENT);
  private readonly _platformId = inject(PLATFORM_ID);
  private _linkCanonical: HTMLLinkElement;

  constructor() {
    if (isPlatformBrowser(this._platformId)) {
      this.createCanonicalTag();
    }
  }

  createCanonicalTag(): void {
    this._linkCanonical = this._document.createElement('link');
    this._linkCanonical.setAttribute('rel', 'canonical');
    this._document.head.appendChild(this._linkCanonical);
    this._linkCanonical.setAttribute('href', this.getCanonicalUrl());
  }

  trackCanonicalChanges(): void {
    if (isPlatformServer(this._platformId)) {
      return;
    }

    this._router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      takeUntilDestroyed(this._destroyRef),
    )
    .subscribe(() => {
      this._linkCanonical.setAttribute('href', this.getCanonicalUrl());
    });
  }

  private getCanonicalUrl(): string {
    return this._document.location.origin + this._document.location.pathname;
  }
}
