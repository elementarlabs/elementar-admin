import { Component } from '@angular/core';
import { ThumbnailMakerComponent } from '@elementar/components/thumbnail-maker';

@Component({
  selector: 'app-basic-thumbnail-maker',
  standalone: true,
  imports: [
    ThumbnailMakerComponent
  ],
  templateUrl: './basic-thumbnail-maker.component.html',
  styleUrl: './basic-thumbnail-maker.component.scss'
})
export class BasicThumbnailMakerComponent {

}
