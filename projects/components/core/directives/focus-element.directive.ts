import {
  AfterViewInit, booleanAttribute,
  ChangeDetectorRef,
  Directive,
  ElementRef,
  inject, input,
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

  checkChildren = input(true, {
    transform: booleanAttribute
  });

  readonly elementFocused = output<void>();
  readonly elementBlurred = output<void>();

  ngAfterViewInit() {
    this._focusMonitor
      .monitor(this._elementRef.nativeElement, this.checkChildren())
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
