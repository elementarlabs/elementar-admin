import { Component } from '@angular/core';
import { PlaygroundComponent } from '@meta/playground/playground.component';
import { BasicCarouselExampleComponent } from '../_examples/basic-carousel-example/basic-carousel-example.component';
import {
  CarouselControlsCustomPositionExampleComponent
} from '../_examples/carousel-controls-custom-position-example/carousel-controls-custom-position-example.component';
import { PageComponent } from '@meta/page/page.component';
import { PageContentDirective } from '@meta/page/page-content.directive';
import {
  CarouselFadeEffectExampleComponent
} from '../_examples/carousel-fade-effect-example/carousel-fade-effect-example.component';

@Component({
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
