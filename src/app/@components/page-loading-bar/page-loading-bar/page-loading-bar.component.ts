import { booleanAttribute, ChangeDetectorRef, Component, DestroyRef, inject, input, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { MatProgressBar } from '@angular/material/progress-bar';
import { Subscription, timer } from 'rxjs';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { map, take } from 'rxjs/operators';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'emr-page-loading-bar',
  exportAs: 'emrPageLoadingBar',
  standalone: true,
  imports: [
    NgIf,
    MatProgressBar
  ],
  templateUrl: './page-loading-bar.component.html',
  styleUrl: './page-loading-bar.component.scss',
  host: {
    'class': 'emr--page-loading-bar',
    '[class.is-visible]': 'visible',
    '[class.is-fixed]': 'fixed'
  }
})
export class PageLoadingBarComponent implements OnInit {
  private _router = inject(Router);
  private _destroyRef = inject(DestroyRef);
  private _cdr = inject(ChangeDetectorRef);

  fixed = input(false, {
    transform: booleanAttribute
  })

  protected visible = false;
  protected value = 0;
  private _subscription: Subscription;

  ngOnInit(): void {
    this._router.events
      .pipe(takeUntilDestroyed(this._destroyRef))
      .subscribe(event => {
        if (event instanceof NavigationStart) {
          this._start();
        }

        if ((event instanceof NavigationError || event instanceof NavigationEnd || event instanceof NavigationCancel)) {
          this._finish();
        }
      })
    ;
  }

  private _start(): void {
    this._subscription?.unsubscribe();
    this.visible = false;
    this._subscription = timer(0, 250)
      .pipe(
        takeUntilDestroyed(this._destroyRef),
        take(6),
        map(_result => {
          const min = ((_result + 1) * 25) - 25;
          const max = (_result + 1) * 25;
          const loading = this._getRandom(min, max);

          return loading < 100 ? loading : 100;
        })
      ).subscribe(_result => {
        this.value = _result;
        this._cdr.markForCheck();
      }, _ => {
      }, () => {
        this.visible = false;
        this._cdr.markForCheck();
      })
    ;
    this.visible = true;
    this.value = 0;
  }

  private _finish(): void {
    if (this.value === 100) {
      this.visible = false;
      this._subscription.unsubscribe();
    }
  }

  private _getRandom(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
}
