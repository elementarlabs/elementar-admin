import { Component } from '@angular/core';
import {
  ImageViewerDirective, ImageViewerPictureDirective
} from '@elementar/components/image-viewer';

@Component({
  selector: 'app-basic-image-viewer-example',
  standalone: true,
  imports: [
    ImageViewerDirective,
    ImageViewerPictureDirective
  ],
  templateUrl: './basic-image-viewer-example.component.html',
  styleUrl: './basic-image-viewer-example.component.scss'
})
export class BasicImageViewerExampleComponent {

}
