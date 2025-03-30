import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component, contentChild, effect,
  ElementRef,
  inject, input, numberAttribute,
  output,
  PLATFORM_ID,
  Renderer2,
  signal,
} from '@angular/core';
import { ImageResizeHandlerDirective } from '../image-resize-handler.directive';
import { isPlatformServer } from '@angular/common';
import { ImageResizedEvent } from '../types';
import { ImageResizerImageDirective } from '../image-resizer-image.directive';

@Component({
  selector: 'emr-image-resizer',
  exportAs: 'emrImageResizer',
  imports: [
    ImageResizeHandlerDirective
  ],
  templateUrl: './image-resizer.component.html',
  styleUrl: './image-resizer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'emr-image-resizer'
  }
})
export class ImageResizerComponent implements AfterContentInit {
  protected _platformId = inject(PLATFORM_ID);
  protected _elementRef = inject(ElementRef);
  protected _renderer = inject(Renderer2);

  readonly imageRef = contentChild.required(ImageResizerImageDirective);

  imageMaxWidth = input(null, {
    transform: numberAttribute
  });
  imageMinWidth = input(100, {
    transform: numberAttribute
  });

  readonly imageResized = output<ImageResizedEvent>();

  protected _maxWidth = signal<number | null>(null);

  constructor() {
    effect(() => {
      this._maxWidth.set(this.imageMaxWidth());
    });
  }

  ngAfterContentInit() {
    if (isPlatformServer(this._platformId)) {
      return;
    }

    this.imageRef().elementRef.nativeElement
      .onload = () => {
        setTimeout(() => {
          const { width } = this.imageRef().elementRef.nativeElement.getBoundingClientRect();

          if (this.imageMaxWidth() === null) {
            this._maxWidth.set(width);
          }
        }, 100);
      };
  }

  onDimensionsChanged() {
    const { width, height } = this.imageRef().elementRef.nativeElement.getBoundingClientRect();
    const { naturalWidth, naturalHeight } = this.imageRef().elementRef.nativeElement;
    this.imageResized.emit({
      width,
      height,
      naturalWidth,
      naturalHeight
    });
  }
}
