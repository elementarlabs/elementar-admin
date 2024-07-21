import { DestroyRef, inject, Injectable } from '@angular/core';
import { ConfirmOptions } from './types';
import { ConfirmRef } from './confirm-ref';
import { ConfirmComponent } from './confirm/confirm.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class ConfirmManager {
  private _dialog = inject(MatDialog);
  private _destroyRef = inject(DestroyRef);

  open(options: ConfirmOptions): ConfirmRef {
    const confirmRef = new ConfirmRef();
    const dialogRef = this._dialog.open(ConfirmComponent, {
      data: options,
      closeOnNavigation: true,
      disableClose: true
    });
    dialogRef
      .afterClosed()
      .pipe(
        takeUntilDestroyed(this._destroyRef)
      )
      .subscribe((isConfirmed: any) => {
        if (isConfirmed) {
          confirmRef.confirm();
        } else {
          confirmRef.cancel();
        }
      })
    ;
    return confirmRef;
  }
}
