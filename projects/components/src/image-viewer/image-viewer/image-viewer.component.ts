import { Component, DestroyRef, ElementRef, inject, Renderer2 } from '@angular/core';
import { MatButton, MatIconButton } from '@angular/material/button';
import { IMAGE_VIEWER_PICTURE_DATA, IMAGE_VIEWER_PICTURE_REF } from '../types';
import { MatIcon } from '@angular/material/icon';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { DOCUMENT, NgTemplateOutlet } from '@angular/common';
import { fromEvent } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'emr-image-viewer',
  exportAs: 'emrImageViewer',
  standalone: true,
  imports: [
    MatButton,
    MatIconButton,
    MatIcon,
    MatProgressSpinner,
    NgTemplateOutlet
  ],
  templateUrl: './image-viewer.component.html',
  styleUrl: './image-viewer.component.scss',
  host: {
    'class': 'emr-image-viewer',
    '[class.loading]': 'loading'
  }
})
export class ImageViewerComponent {
  readonly elementRef = inject(ElementRef);
  private _document = inject(DOCUMENT);
  private _destroyRef = inject(DestroyRef);
  private _renderer = inject(Renderer2);
  private _dragging = false;
  private _startClientY = 0;
  private _startClientX = 0;
  private _offsetY = 0;
  private _offsetX = 0;
  private _tmpOffsetY = 0;
  private _tmpOffsetX = 0;
  readonly pictureRef = inject(IMAGE_VIEWER_PICTURE_REF);
  readonly data = inject(IMAGE_VIEWER_PICTURE_DATA);
  loading = true;
  scale = 1;
  image: HTMLImageElement;
  alreadyDragged = false;
  scaleMin = 1;
  scaleMax = 1;

  onLoad(event: Event): void {
    this.loading = false;
    this.image = (event.target as HTMLImageElement);

    if (this.image.width > this.image.height) {
      this.scaleMax = 1 + this.image.width / this.image.naturalWidth;
    } else {
      this.scaleMax = 1 + this.image.height / this.image.naturalWidth;
    }

    const image = this.image;
    fromEvent(image, 'mousedown')
      .pipe(
        takeUntilDestroyed(this._destroyRef)
      )
      .subscribe((event: any) => {
        this._dragging = true;
        this._startClientY = event.clientY;
        this._startClientX = event.clientX;
      })
    ;
    fromEvent(this._document, 'mousemove')
      .pipe(
        takeUntilDestroyed(this._destroyRef)
      )
      .subscribe((event: any) => {
        if (this._dragging) {
          const scaleFactor = (1 / this.scale);
          let offsetY = (event.clientY - this._startClientY) * scaleFactor;
          let offsetX = (event.clientX - this._startClientX) * scaleFactor;
          this._transform(offsetY, offsetX);
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
          this._offsetY = this._tmpOffsetY;
          this._offsetX = this._tmpOffsetX;
        }
      })
    ;
  }

  onBackdropClick(): void {
    this.pictureRef.close();
  }

  onPreventClick(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
  }

  toggleZoom(): void {
    if (this.scale === this.scaleMin) {
      this.scale = this.scaleMax;
    } else {
      this.scale = this.scaleMin;
    }

    const element = this.elementRef.nativeElement as HTMLElement;
    element.style.setProperty('--emr-image-viewer-picture-scale', this.scale.toString());
  }

  protected onDragStart(event: Event): void {
    event.stopPropagation();
    event.preventDefault();
    this.alreadyDragged = true;
  }

  private _transform(offsetY: number, offsetX: number): void {
    const image = this.image as HTMLImageElement;
    const scaleFactor = (1 / this.scale);
    let translateX = this._offsetX + offsetX;
    // let offsetStartX = ((image.width / 2) - translateX) / scaleFactor;
    // let offsetEndX = ((image.width / 2) + translateX) / scaleFactor;
    let translateY = this._offsetY + offsetY;
    // let offsetStartY = ((image.height / 2) - translateY) / scaleFactor;
    // let offsetEndY = ((image.height / 2) + translateY) / scaleFactor;

    // let thumbHalfWidth = 150;
    //
    // if (offsetStartX <= thumbHalfWidth && translateX > 0) {
    //   translateX = (image.width / 2) - (thumbHalfWidth * scaleFactor);
    // } else if (offsetEndX <= thumbHalfWidth && translateX < 0) {
    //   translateX = -((image.width / 2) - (thumbHalfWidth * scaleFactor));
    // }
    //
    // if (offsetStartY <= thumbHalfWidth && translateY > 0) {
    //   translateY = (image.height / 2) - (thumbHalfWidth * scaleFactor);
    // } else if (offsetEndY <= thumbHalfWidth && translateY < 0) {
    //   translateY = -((image.height / 2) - (thumbHalfWidth * scaleFactor));
    // }

    this._tmpOffsetY = translateY;
    this._tmpOffsetX = translateX;
    this._renderer.setStyle(
      image,
      'transform', `translate(${translateX}px,${translateY}px)`
    );
  }
}
