import { Directive, input } from '@angular/core';

@Directive({
  selector: '[emrImageViewerPicture]',
  standalone: true
})
export class ImageViewerPictureDirective {
  imageSrc = input.required<string>();
}
