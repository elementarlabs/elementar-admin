import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { ThumbnailMakerComponent } from '@elementar-ui/components/thumbnail-maker';
import { UploadFileSelectedEvent, UploadTriggerDirective } from '@elementar-ui/components/upload';

@Component({
  selector: 'app-thumbnail-maker-with-file-select-example',
  imports: [
    MatButton,
    ThumbnailMakerComponent,
    UploadTriggerDirective
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

  onImageSelected(event: UploadFileSelectedEvent) {
    const reader = new FileReader();
    reader.onload = () => {
      this.src = reader.result as string;
    };
    reader.readAsDataURL(event.files[0]);
  }
}
