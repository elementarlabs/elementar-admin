import { Directive, inject, TemplateRef } from '@angular/core';

@Directive({
  selector: '[emrImageViewerPictureDescription]',
  standalone: true
})
export class ImageViewerPictureDescriptionDirective {
  readonly templateRef = inject(TemplateRef);
}
