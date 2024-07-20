import { Component } from '@angular/core';
import {
  ImageViewerDirective,
  ImageViewerPictureCaptionDirective,
  ImageViewerPictureDescriptionDirective, ImageViewerPictureDirective, ImageViewerPictureTitleDirective
} from '@elementar/components/image-viewer';

@Component({
  selector: 'app-image-viewer-with-title-example',
  standalone: true,
  imports: [
    ImageViewerDirective,
    ImageViewerPictureCaptionDirective,
    ImageViewerPictureDescriptionDirective,
    ImageViewerPictureDirective,
    ImageViewerPictureTitleDirective
  ],
  templateUrl: './image-viewer-with-title-example.component.html',
  styleUrl: './image-viewer-with-title-example.component.scss'
})
export class ImageViewerWithTitleExampleComponent {

}
