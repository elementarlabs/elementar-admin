import { Directive, inject, TemplateRef } from '@angular/core';

@Directive({
  selector: '[emrImageViewerPictureCaption]',
  standalone: true
})
export class ImageViewerPictureCaptionDirective {
  readonly templateRef = inject(TemplateRef);
}
