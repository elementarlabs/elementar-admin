import { Component, signal } from '@angular/core';
import {
  ImageResizedEvent,
  ImageResizerComponent,
  ImageResizerImageDirective
} from '@elementar-ui/components/image-resizer';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-basic-image-resizer-example',
  imports: [
    ImageResizerComponent,
    JsonPipe,
    ImageResizerImageDirective
  ],
  templateUrl: './basic-image-resizer-example.component.html',
  styleUrl: './basic-image-resizer-example.component.scss'
})
export class BasicImageResizerExampleComponent {
  imageDimensionsInfo = signal<ImageResizedEvent | null>(null);

  onImageResized(event: ImageResizedEvent) {
    this.imageDimensionsInfo.set(event);
  }
}
