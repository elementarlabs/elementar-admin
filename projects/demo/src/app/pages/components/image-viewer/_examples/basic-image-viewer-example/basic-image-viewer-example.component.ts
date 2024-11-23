import { Component } from '@angular/core';
import {
  ImageViewerDirective, ImageViewerPictureDirective
} from '@elementar/components/image-viewer';
import { NgOptimizedImage } from '@angular/common';

@Component({
    selector: 'app-basic-image-viewer-example',
    imports: [
        ImageViewerDirective,
        ImageViewerPictureDirective,
        NgOptimizedImage
    ],
    templateUrl: './basic-image-viewer-example.component.html',
    styleUrl: './basic-image-viewer-example.component.scss'
})
export class BasicImageViewerExampleComponent {

}
