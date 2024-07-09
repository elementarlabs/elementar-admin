import { DestroyRef, Directive, ElementRef, inject, input, numberAttribute, OnInit, Renderer2 } from '@angular/core';
import { fromEvent } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Directive({
  selector: '[emrDragImage]',
  standalone: true
})
export class DragImageDirective implements OnInit {
  private _elementRef = inject(ElementRef);
  private _document = inject(DOCUMENT);
  private _destroyRef = inject(DestroyRef);
  private _renderer = inject(Renderer2);
  private _dragging = false;
  private _startClientY = 0;
  private _startClientX = 0;
  private _offsetY = 0;
  private _offsetX = 0;

  scale = input.required({
    transform: numberAttribute
  });

  ngOnInit() {
    const image = this._elementRef.nativeElement as HTMLImageElement;
    fromEvent(image, 'mousedown')
      .pipe(
        takeUntilDestroyed(this._destroyRef)
      )
      .subscribe((event: any) => {
        this._dragging = true;
        this._startClientY = event.clientY;
        this._startClientX = event.clientX;
        this._renderer.addClass(image, 'dragging');
      })
    ;
    fromEvent(this._document, 'mousemove')
      .pipe(
        takeUntilDestroyed(this._destroyRef)
      )
      .subscribe((event: any) => {
        if (this._dragging) {
          const offsetY = (event.clientY - this._startClientY) * (1 / this.scale());
          const offsetX = (event.clientX - this._startClientX) * (1 / this.scale());
          this._renderer.setStyle(image, 'transform', `translate(${this._offsetX + offsetX}px,${this._offsetY + offsetY}px)`);
        }
      })
    ;
    fromEvent(this._document, 'mouseup')
      .pipe(
        takeUntilDestroyed(this._destroyRef)
      )
      .subscribe((event: any) => {
        if (this._dragging) {
          this._dragging = false;
          this._renderer.removeClass(image, 'dragging');
          this._offsetY = this._offsetY + (event.clientY - this._startClientY) * (1 / this.scale());
          this._offsetX = this._offsetX + (event.clientX - this._startClientX) * (1 / this.scale());
        }
      })
    ;
  }
}
