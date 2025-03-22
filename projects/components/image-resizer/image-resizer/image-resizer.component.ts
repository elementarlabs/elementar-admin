import {
  afterNextRender, AfterViewChecked, AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  input, numberAttribute, OnInit, PLATFORM_ID, Renderer2, signal
} from '@angular/core';
import { ImageResizeHandlerDirective } from '../image-resize-handler.directive';
import { isPlatformServer } from '@angular/common';

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
  }
})
export class ImageResizerComponent {
  protected _platformId = inject(PLATFORM_ID);
  protected _elementRef = inject(ElementRef);
  protected _renderer = inject(Renderer2);

  resizerWidth = input.required();
  imageSrc = input.required<string>();

  imageWidth = signal(0);

  ngOnInit() {
    this._renderer.setStyle(this._elementRef.nativeElement, 'width', `${this.resizerWidth()}px`);
  }

  onLoad(imageElement: HTMLImageElement) {
    if (isPlatformServer(this._platformId)) {
      return;
    }

    setTimeout(() => {
      this.imageWidth.set(imageElement.clientWidth);
    }, 100);
  }

  onDragStart(event: Event) {
    event.stopPropagation();
    event.preventDefault();
  }
}
