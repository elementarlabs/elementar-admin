import { DestroyRef, inject, Injectable, PLATFORM_ID } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { DOCUMENT, isPlatformServer } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private readonly _router = inject(Router);
  private readonly _destroyRef = inject(DestroyRef);
  private readonly _document = inject(DOCUMENT);
  private readonly _platformId = inject(PLATFORM_ID);
  private readonly _meta = inject(Meta);
  private readonly _title = inject(Title);
  private _linkCanonical: HTMLLinkElement | null;

  get meta(): Meta {
    return this._meta;
  }

  setPageTitle(title: string): void {
    this._title.setTitle(title);
  }

  trackCanonicalChanges(siteUrl: string): void {
    this._createCanonicalTag(siteUrl);

    if (isPlatformServer(this._platformId)) {
      return;
    }

    this._router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      takeUntilDestroyed(this._destroyRef),
    ).subscribe(() => {
      this._linkCanonical?.setAttribute('href', this.getCanonicalUrl(siteUrl));
    });
  }

  private getCanonicalUrl(siteUrl: string): string {
    if (this._document.URL.startsWith('http')) {
      return this._document.URL;
    }

    return siteUrl + this._document.URL;
  }

  private _createCanonicalTag(siteUrl: string): void {
    this._linkCanonical = this._document.querySelector('link[rel="canonical"]');

    if (!this._linkCanonical) {
      this._linkCanonical = this._document.createElement('link');
      this._linkCanonical.setAttribute('rel', 'canonical');
      this._document.head.appendChild(this._linkCanonical);
    }

    this._linkCanonical.setAttribute('href', this.getCanonicalUrl(siteUrl));
  }
}
