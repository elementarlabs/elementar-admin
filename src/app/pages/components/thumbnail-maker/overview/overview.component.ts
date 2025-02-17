import { Component } from '@angular/core';
import { PageComponent } from '@meta/page/page.component';
import { PageContentDirective } from '@meta/page/page-content.directive';
import { PlaygroundComponent } from '@meta/playground/playground.component';
import { BasicThumbnailMakerComponent } from '../_examples/basic-thumbnail-maker/basic-thumbnail-maker.component';
import {
  ThumbnailMakerWithHelperTextExampleComponent
} from '../_examples/thumbnail-maker-with-helper-text-example/thumbnail-maker-with-helper-text-example.component';
import {
  ThumbnailMakerWithFileSelectExampleComponent
} from '../_examples/thumbnail-maker-with-file-select-example/thumbnail-maker-with-file-select-example.component';

@Component({
  selector: 'app-overview',
  imports: [
    PageComponent,
    PageContentDirective,
    PlaygroundComponent,
    BasicThumbnailMakerComponent,
    ThumbnailMakerWithHelperTextExampleComponent,
    ThumbnailMakerWithFileSelectExampleComponent
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
