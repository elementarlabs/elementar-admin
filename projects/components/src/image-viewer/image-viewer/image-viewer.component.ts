import { Component, inject } from '@angular/core';
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
  readonly pictureRef = inject(IMAGE_VIEWER_PICTURE_REF);
  readonly data = inject(IMAGE_VIEWER_PICTURE_DATA);
  loading = true;

  onLoad(event: Event): void {
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
