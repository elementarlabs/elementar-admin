import { Component, ElementRef, inject, Renderer2 } from '@angular/core';
import { MatButton, MatIconButton } from '@angular/material/button';
import { IMAGE_VIEWER_PICTURE_DATA, IMAGE_VIEWER_PICTURE_REF } from '../types';
import { MatIcon } from '@angular/material/icon';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { NgTemplateOutlet } from '@angular/common';

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
  private _elementRef = inject(ElementRef);
  private _renderer = inject(Renderer2);
  readonly pictureRef = inject(IMAGE_VIEWER_PICTURE_REF);
  readonly data = inject(IMAGE_VIEWER_PICTURE_DATA);
  loading = true;

  onLoad(event: Event): void {
    const image = event.target as HTMLImageElement;
    const element = this._elementRef.nativeElement as HTMLElement;
    element.style.setProperty('--emr-image-viewer-image-width', image.width + 'px');
    this.loading = false;
  }

  onBackdropClick(): void {
    this.pictureRef.close();
  }

  onPreventClick(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
  }
}
