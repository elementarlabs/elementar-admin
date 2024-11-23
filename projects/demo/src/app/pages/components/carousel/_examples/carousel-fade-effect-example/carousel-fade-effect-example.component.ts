import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import {
  CarouselCardComponent,
  CarouselComponent,
  CarouselNextDirective,
  CarouselPreviousDirective
} from '@elementar/components/carousel';

@Component({
  selector: 'app-carousel-fade-effect-example',
  imports: [
    CarouselCardComponent,
    CarouselComponent,
    CarouselNextDirective,
    CarouselPreviousDirective,
    MatIcon,
    MatIconButton
  ],
  templateUrl: './carousel-fade-effect-example.component.html',
  styleUrl: './carousel-fade-effect-example.component.scss'
})
export class CarouselFadeEffectExampleComponent {

}
