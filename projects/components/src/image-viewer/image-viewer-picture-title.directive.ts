import { Directive, inject, TemplateRef } from '@angular/core';

@Directive({
  selector: '[emrImageViewerPictureTitle]',
  standalone: true
})
export class ImageViewerPictureTitleDirective {
  readonly templateRef = inject(TemplateRef);
}
