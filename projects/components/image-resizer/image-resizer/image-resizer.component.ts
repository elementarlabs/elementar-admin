import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component, contentChild,
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

  minWidth = input(100, {
    transform: numberAttribute
  });

  readonly imageResized = output<ImageResizedEvent>();

  protected _maxWidth = signal(0);

  ngAfterContentInit() {
    if (isPlatformServer(this._platformId)) {
      return;
    }

    this.imageRef().elementRef.nativeElement
      .onload = () => {
        const { width } = this.imageRef().elementRef.nativeElement.getBoundingClientRect();
        this._maxWidth.set(width);
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
