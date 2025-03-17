import {
  booleanAttribute,
  Component, effect,
  inject,
  Injector,
  input, output,
  TemplateRef,
  viewChild,
  ViewContainerRef
} from '@angular/core';
import { MatButton } from '@angular/material/button';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { CookiePopupAcceptType } from '../types';

@Component({
  selector: 'emr-cookie-popup',
  exportAs: 'emrCookiePopup',
  imports: [
    MatButton
  ],
  templateUrl: './cookie-popup.component.html',
  styleUrl: './cookie-popup.component.scss'
})
export class CookiePopupComponent {
  private _overlay = inject(Overlay);
  private _viewContainerRef = inject(ViewContainerRef);
  private _injector = inject(Injector);

  private _contentRef = viewChild.required<TemplateRef<any>>('contentRef');

  cookiePolicyUrl = input('');
  visible = input(true, {
    transform: booleanAttribute
  });

  private _overlayRef: OverlayRef | null = null;

  readonly cookieAccepted = output<CookiePopupAcceptType>();

  constructor() {
    effect(() => {
      if (this.visible()) {
        this._show();
      } else {
        this._hide();
      }
    });
  }

  acceptNecessaryCookiesOnly() {
    this.cookieAccepted.emit('necessary');
    this._hide();
  }

  acceptAllCookies() {
    this.cookieAccepted.emit('all');
    this._hide();
  }

  private _show() {
    if (this._overlayRef) {
      return;
    }

    const overlayPositionStrategy = this._overlay
      .position()
      .global()
      .start('20px')
      .bottom('20px')
    ;
    this._overlayRef = this._overlay.create({
      hasBackdrop: false,
      positionStrategy: overlayPositionStrategy,
      scrollStrategy: this._overlay.scrollStrategies.reposition(),
    });
    this._overlayRef.attach(new TemplatePortal(
      this._contentRef(),
      this._viewContainerRef,
      null,
      this._injector
    ));
  }

  private _hide() {
    if (this._overlayRef) {
      this._overlayRef.dispose();
      this._overlayRef.detach();
      this._overlayRef = null;
    }
  }
}
