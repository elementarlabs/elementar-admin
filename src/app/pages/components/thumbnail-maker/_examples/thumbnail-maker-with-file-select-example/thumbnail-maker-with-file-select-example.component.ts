import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { ThumbnailMakerComponent } from '@elementar/components/thumbnail-maker';
import { EmrUploadModule, UploadSelectedEvent } from '@elementar/components';

@Component({
  selector: 'app-thumbnail-maker-with-file-select-example',
  standalone: true,
  imports: [
    MatButton,
    ThumbnailMakerComponent,
    EmrUploadModule
  ],
  templateUrl: './thumbnail-maker-with-file-select-example.component.html',
  styleUrl: './thumbnail-maker-with-file-select-example.component.scss'
})
export class ThumbnailMakerWithFileSelectExampleComponent {
  src = '';
  thumbnail = '';

  makeThumbnail(thumbnailMaker: ThumbnailMakerComponent): void {
    this.thumbnail = thumbnailMaker.api.getDataUrl();
  }

  onImageSelected(event: UploadSelectedEvent) {
    const reader = new FileReader();
    reader.onload = () => {
      this.src = reader.result as string;
    };
    reader.readAsDataURL(event.files[0]);
  }
}
