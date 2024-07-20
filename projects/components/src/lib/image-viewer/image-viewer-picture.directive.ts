import { contentChild, Directive, inject, input } from '@angular/core';
import { IMAGE_VIEWER } from './types';
import { ImageViewerDirective } from './image-viewer.directive';
import { ImageViewerPictureCaptionDirective } from './image-viewer-picture-caption.directive';
import { ImageViewerPictureDescriptionDirective } from './image-viewer-picture-description.directive';

@Directive({
  selector: '[emrImageViewerPicture]',
  standalone: true,
  providers: [
    {
      provide: IMAGE_VIEWER,
      useExisting: ImageViewerPictureDirective
    }
  ],
  host: {
    '(click)': 'onClick($event)'
  }
})
export class ImageViewerPictureDirective {
  private _imageViewer = inject(ImageViewerDirective);
  private _captionTplRef = contentChild(ImageViewerPictureCaptionDirective);
  private _descriptionTplRef = contentChild(ImageViewerPictureDescriptionDirective);
  sourceUrl = input.required<string>();
  caption = input<string>();
  description = input<string>();

  protected onClick(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    this._imageViewer.api.open({
      sourceUrl: this.sourceUrl(),
      caption: this.caption(),
      description: this.description(),
      captionTplRef: this._captionTplRef()?.templateRef,
      descriptionTplRef: this._descriptionTplRef()?.templateRef
    });
  }
}
