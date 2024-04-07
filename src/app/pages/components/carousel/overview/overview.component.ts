import { Component } from '@angular/core';
import { BasicBadgesExampleComponent } from '../../badge/_examples/basic-badges-example/basic-badges-example.component';
import { PlaygroundComponent } from '@meta/playground/playground.component';
import { BasicCarouselExampleComponent } from '../_examples/basic-carousel-example/basic-carousel-example.component';
import {
  CarouselControlsCustomPositionExampleComponent
} from '../_examples/carousel-controls-custom-position-example/carousel-controls-custom-position-example.component';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [
    BasicBadgesExampleComponent,
    PlaygroundComponent,
    BasicCarouselExampleComponent,
    CarouselControlsCustomPositionExampleComponent
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
