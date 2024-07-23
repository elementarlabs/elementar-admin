import { Component, ElementRef, inject } from '@angular/core';
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
  readonly elementRef = inject(ElementRef);
  readonly pictureRef = inject(IMAGE_VIEWER_PICTURE_REF);
  readonly data = inject(IMAGE_VIEWER_PICTURE_DATA);
  loading = true;
  scale = 1;
  image: HTMLImageElement;

  onLoad(event: Event): void {
    this.loading = false;
    this.image = (event.target as HTMLImageElement);
  }

  onBackdropClick(): void {
    this.pictureRef.close();
  }

  onPreventClick(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
  }

  zoomIn(): void {
    this._zoom(.33);
  }

  zoomOut(): void {
    this._zoom(-.33);
  }

  private _zoom(value: number): void {
    let scale = this.scale + value;

    // if (scale >= 2) {
    //   scale = 2;
    // } else if (scale <= 1) {
    //   scale = 1;
    // }

    this.scale = scale;
    const element = this.elementRef.nativeElement as HTMLElement;
    element.style.setProperty('--emr-image-viewer-picture-scale', this.scale.toString());
  }
}
