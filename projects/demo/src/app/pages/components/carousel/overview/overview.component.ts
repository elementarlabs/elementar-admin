import { Component } from '@angular/core';
import { PlaygroundComponent } from '@demo/meta/playground/playground.component';
import { BasicCarouselExampleComponent } from '../_examples/basic-carousel-example/basic-carousel-example.component';
import {
  CarouselControlsCustomPositionExampleComponent
} from '../_examples/carousel-controls-custom-position-example/carousel-controls-custom-position-example.component';
import { PageComponent } from '@demo/meta/page/page.component';
import { PageContentDirective } from '@demo/meta/page/page-content.directive';
import {
  CarouselFadeEffectExampleComponent
} from '../_examples/carousel-fade-effect-example/carousel-fade-effect-example.component';

@Component({
  selector: 'app-overview',
  imports: [
    PlaygroundComponent,
    BasicCarouselExampleComponent,
    CarouselControlsCustomPositionExampleComponent,
    PageComponent,
    PageContentDirective,
    CarouselFadeEffectExampleComponent
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
