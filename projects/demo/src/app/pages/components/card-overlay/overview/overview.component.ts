import { Component } from '@angular/core';
import { PageComponent } from '@demo/meta/page/page.component';
import { PageContentDirective } from '@demo/meta/page/page-content.directive';
import { PlaygroundComponent } from '@demo/meta/playground/playground.component';
import {
  BasicCardOverlayExampleComponent
} from '../_examples/basic-card-overlay-example/basic-card-overlay-example.component';
import {
  CardOverlayWithTranslateExampleComponent
} from '../_examples/card-overlay-with-translate-example/card-overlay-with-translate-example.component';
import {
  CardOverlayWithBlurExampleComponent
} from '../_examples/card-overlay-with-blur-example/card-overlay-with-blur-example.component';
import { MatDivider } from '@angular/material/divider';

@Component({
    selector: 'app-overview',
  imports: [
    PageComponent,
    PageContentDirective,
    PlaygroundComponent,
    BasicCardOverlayExampleComponent,
    CardOverlayWithTranslateExampleComponent,
    CardOverlayWithBlurExampleComponent,
    MatDivider
  ],
    templateUrl: './overview.component.html',
    styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
