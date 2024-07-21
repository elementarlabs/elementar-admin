import { contentChild, Directive, inject, input } from '@angular/core';
import { IMAGE_VIEWER } from './types';
import { ImageViewerDirective } from './image-viewer.directive';
import { ImageViewerPictureCaptionDirective } from './image-viewer-picture-caption.directive';
import { ImageViewerPictureDescriptionDirective } from './image-viewer-picture-description.directive';
import { ImageViewerPictureTitleDirective } from './image-viewer-picture-title.directive';

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
  private _titleTplRef = contentChild(ImageViewerPictureTitleDirective);
  private _captionTplRef = contentChild(ImageViewerPictureCaptionDirective);
  private _descriptionTplRef = contentChild(ImageViewerPictureDescriptionDirective);
  sourceUrl = input.required<string>();
  caption = input<string>();
  title = input<string>();
  description = input<string>();

  protected onClick(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    this._imageViewer.api.open({
      sourceUrl: this.sourceUrl(),
      title: this.title(),
      caption: this.caption(),
      description: this.description(),
      titleTplRef: this._titleTplRef()?.templateRef,
      captionTplRef: this._captionTplRef()?.templateRef,
      descriptionTplRef: this._descriptionTplRef()?.templateRef
    });
  }
}
