import { Component } from '@angular/core';
import { ThumbnailMakerComponent } from '@elementar-ui/components/thumbnail-maker';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-basic-thumbnail-maker',
  imports: [
    ThumbnailMakerComponent,
    MatButton
  ],
  templateUrl: './basic-thumbnail-maker.component.html',
  styleUrl: './basic-thumbnail-maker.component.scss'
})
export class BasicThumbnailMakerComponent {
  thumbnail = '';

  makeThumbnail(thumbnailMaker: ThumbnailMakerComponent): void {
    this.thumbnail = thumbnailMaker.api.getDataUrl();
  }
}
