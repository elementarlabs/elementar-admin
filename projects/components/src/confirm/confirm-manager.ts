import { DestroyRef, inject, Injectable, Injector } from '@angular/core';
import { CONFIRM_DATA, CONFIRM_REF, ConfirmOptions } from './types';
import { ConfirmRef } from './confirm-ref';
import { ComponentPortal } from '@angular/cdk/portal';
import { ConfirmComponent } from './confirm/confirm.component';
import { Overlay } from '@angular/cdk/overlay';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class ConfirmManager {
  private _overlay = inject(Overlay);
  private _injector = inject(Injector);
  private _destroyRef = inject(DestroyRef);

  open(options: ConfirmOptions): ConfirmRef {
    const confirmRef = new ConfirmRef();
    const overlayRef = this._overlay.create({
      positionStrategy: this._overlay.position().global()
    });
    const injector = Injector.create({
      providers: [
        {
          provide: CONFIRM_REF,
          useValue: confirmRef
        },
        {
          provide: CONFIRM_DATA,
          useValue: options
        }
      ],
      parent: this._injector
    });
    const confirmPortal = new ComponentPortal(ConfirmComponent, null, injector);
    overlayRef.attach(confirmPortal);
    confirmRef.closed.pipe(
      takeUntilDestroyed(this._destroyRef)
    ).subscribe(() => {
      overlayRef.detach();
    });
    return confirmRef;
  }
}
