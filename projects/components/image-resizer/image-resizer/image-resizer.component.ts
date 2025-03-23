import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  input,
  output,
  PLATFORM_ID, 
  Renderer2,
  signal,
  viewChild
} from '@angular/core';
import { ImageResizeHandlerDirective } from '../image-resize-handler.directive';
import { isPlatformServer } from '@angular/common';
import { ImageAlign, ImageResizedEvent } from '../types';

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
    'class': 'emr-image-resizer',
    '[class.align-start]': "imageAlign() === 'start'",
    '[class.align-center]': "imageAlign() === 'center'",
    '[class.align-end]': "imageAlign() === 'end'",
  }
})
export class ImageResizerComponent {
  protected _platformId = inject(PLATFORM_ID);
  protected _elementRef = inject(ElementRef);
  protected _renderer = inject(Renderer2);

  private _imageElement = viewChild.required<ElementRef<HTMLImageElement>>('imageElement');

  resizerWidth = input.required();
  imageSrc = input.required<string>();
  imageAlign = input<ImageAlign>('center');

  readonly imageResized = output<ImageResizedEvent>();

  protected _imageWidth = signal(0);

  ngOnInit() {
    this._renderer.setStyle(this._elementRef.nativeElement, 'width', `${this.resizerWidth()}px`);
  }

  onLoad(imageElement: HTMLImageElement) {
    if (isPlatformServer(this._platformId)) {
      return;
    }

    setTimeout(() => {
      this._imageWidth.set(imageElement.clientWidth);
    }, 100);
  }

  onDragStart(event: Event) {
    event.stopPropagation();
    event.preventDefault();
  }

  onDimensionsChanged() {
    const { width, height } = this._imageElement().nativeElement.getBoundingClientRect();
    const { naturalWidth, naturalHeight } = this._imageElement().nativeElement;
    this.imageResized.emit({
      width,
      height,
      naturalWidth,
      naturalHeight
    });
  }
}
