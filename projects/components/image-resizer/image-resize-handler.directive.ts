import {
  ChangeDetectorRef, DestroyRef,
  Directive,
  ElementRef,
  inject,
  input,
  NgZone, numberAttribute,
  PLATFORM_ID,
  Renderer2
} from '@angular/core';
import { DOCUMENT, isPlatformServer } from '@angular/common';
import { fromEvent, throttleTime } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Directive({
  selector: '[emrImageResizeHandler]'
})
export class ImageResizeHandlerDirective {
  private _platformId = inject(PLATFORM_ID);
  private _elementRef = inject(ElementRef);
  private _renderer = inject(Renderer2);
  private _cdr = inject(ChangeDetectorRef);
  private _ngZone = inject(NgZone);
  private _destroyRef = inject(DestroyRef);
  private _document = inject(DOCUMENT);
  private _resizing = false;
  private _width: number;
  private _maxWidth: number;
  private _clientX: number;
  private _minWidth = 100;

  imageWidth = input(0, {
    transform: numberAttribute
  });
  targetElement = input.required<HTMLElement>();
  direction = input.required<'left' | 'right'>();

  ngOnInit() {
    if (isPlatformServer(this._platformId)) {
      return;
    }

    const targetElement = this.targetElement();
    this._maxWidth = targetElement.getBoundingClientRect().width;

    this._ngZone.runOutsideAngular(() => {
      fromEvent<MouseEvent>(this._elementRef.nativeElement, 'mousedown')
        .pipe(takeUntilDestroyed(this._destroyRef))
        .subscribe((event: MouseEvent) => {
          if (this.imageWidth() === 0) {
            return;
          }

          this._resizing = true;
          this._width = targetElement.getBoundingClientRect().width;
          this._clientX = event.clientX;
          this._cdr.detectChanges();
        })
      ;
      fromEvent<MouseEvent>(this._document, 'mousemove')
        .pipe(
          throttleTime(5),
          takeUntilDestroyed(this._destroyRef)
        )
        .subscribe((event: MouseEvent) => {
          if (this._resizing) {
            let width = this._width;

            if (this.direction() === 'left') {
              width = this._width - (this._clientX - event.clientX);
            } else if (this.direction() === 'right') {
              width = (this._width - (event.clientX - this._clientX));
            }

            if (width <= this._minWidth) {
              width = this._minWidth;
            } else if (width >= this.imageWidth()) {
              width = this.imageWidth();
            }

            this._renderer.setStyle(targetElement, 'width', width + 'px');
          }
        })
      ;
      fromEvent(this._document, 'mouseup')
        .pipe(takeUntilDestroyed(this._destroyRef))
        .subscribe(event => {
          this._resizing = false;
          this._cdr.detectChanges();
        })
      ;
    });
  }
}
