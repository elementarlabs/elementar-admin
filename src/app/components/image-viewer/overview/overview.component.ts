import { Component } from '@angular/core';
import { PageComponent } from '@meta/page/page.component';
import { PageContentDirective } from '@meta/page/page-content.directive';
import { PlaygroundComponent } from '@meta/playground/playground.component';
import {
  BasicImageViewerExampleComponent
} from '../_examples/basic-image-viewer-example/basic-image-viewer-example.component';
import {
  ImageViewerWithCaptionAndDescriptionExampleComponent
} from '../_examples/image-viewer-with-caption-and-description-example/image-viewer-with-caption-and-description-example.component';
import {
  ImageViewerWithTitleExampleComponent
} from '../_examples/image-viewer-with-title-example/image-viewer-with-title-example.component';
import { MatDivider } from '@angular/material/divider';

@Component({
  imports: [
    PageComponent,
    PageContentDirective,
    PlaygroundComponent,
    BasicImageViewerExampleComponent,
    ImageViewerWithCaptionAndDescriptionExampleComponent,
    ImageViewerWithTitleExampleComponent,
    MatDivider
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
