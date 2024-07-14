import { Component } from '@angular/core';
import { ThumbnailMakerComponent } from '@elementar/components/thumbnail-maker';
import { MatDivider } from '@angular/material/divider';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-basic-thumbnail-maker',
  standalone: true,
  imports: [
    ThumbnailMakerComponent,
    MatDivider,
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
