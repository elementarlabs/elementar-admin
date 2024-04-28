import {
  AfterViewInit,
  ChangeDetectorRef,
  Directive,
  ElementRef,
  inject,
  NgZone,
  OnDestroy,
  output
} from '@angular/core';
import { FocusMonitor, FocusOrigin } from '@angular/cdk/a11y';

@Directive({
  selector: '[emrFocusElement]',
  exportAs: 'emrFocusElement',
  standalone: true
})
export class FocusElementDirective implements AfterViewInit, OnDestroy {
  private _elementRef = inject(ElementRef);
  private _focusMonitor = inject(FocusMonitor);

  readonly elementFocused = output<void>();
  readonly elementBlurred = output<void>();

  ngAfterViewInit() {
    this._focusMonitor
      .monitor(this._elementRef.nativeElement, true)
      .subscribe(origin => {
        this._emitFocusEvent(origin);
      })
    ;
  }

  ngOnDestroy() {
    this._focusMonitor.stopMonitoring(this._elementRef.nativeElement);
  }

  private _emitFocusEvent(origin: FocusOrigin): void {
    if (origin) {
      this.elementFocused.emit();
    } else {
      this.elementBlurred.emit();
    }
  }
}
