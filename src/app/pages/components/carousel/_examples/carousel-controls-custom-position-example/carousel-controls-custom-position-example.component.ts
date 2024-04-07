import { Component } from '@angular/core';
import { CarouselCardComponent } from '@components/carousel/carousel-card/carousel-card.component';
import { CarouselComponent } from '@components/carousel/carousel/carousel.component';
import { CarouselNextDirective } from '@components/carousel/carousel-next.directive';
import { CarouselPreviousDirective } from '@components/carousel/carousel-previous.directive';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';

@Component({
  selector: 'app-carousel-controls-custom-position-example',
  standalone: true,
  imports: [
    CarouselCardComponent,
    CarouselComponent,
    CarouselNextDirective,
    CarouselPreviousDirective,
    MatIcon,
    MatIconButton
  ],
  templateUrl: './carousel-controls-custom-position-example.component.html',
  styleUrl: './carousel-controls-custom-position-example.component.scss'
})
export class CarouselControlsCustomPositionExampleComponent {

}
