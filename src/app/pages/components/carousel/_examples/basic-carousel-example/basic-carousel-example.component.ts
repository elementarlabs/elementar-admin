import { Component } from '@angular/core';
import { CarouselComponent } from '@components/carousel/carousel/carousel.component';
import { CarouselCardComponent } from '@components/carousel/carousel-card/carousel-card.component';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { CarouselPreviousDirective } from '@components/carousel/carousel-previous.directive';
import { CarouselNextDirective } from '@components/carousel/carousel-next.directive';

@Component({
  selector: 'app-basic-carousel-example',
  standalone: true,
  imports: [
    CarouselComponent,
    CarouselCardComponent,
    MatButton,
    MatIcon,
    CarouselPreviousDirective,
    CarouselNextDirective,
    MatIconButton
  ],
  templateUrl: './basic-carousel-example.component.html',
  styleUrl: './basic-carousel-example.component.scss'
})
export class BasicCarouselExampleComponent {

}
