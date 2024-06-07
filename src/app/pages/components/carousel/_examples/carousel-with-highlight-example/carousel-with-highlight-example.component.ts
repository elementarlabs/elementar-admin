import { Component } from '@angular/core';
import {
  CarouselCardComponent,
  CarouselComponent,
  CarouselNextDirective,
  CarouselPreviousDirective
} from '@elementar/components';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';

@Component({
  selector: 'app-carousel-with-highlight-example',
  standalone: true,
  imports: [
    CarouselCardComponent,
    CarouselComponent,
    CarouselNextDirective,
    CarouselPreviousDirective,
    MatIcon,
    MatIconButton
  ],
  templateUrl: './carousel-with-highlight-example.component.html',
  styleUrl: './carousel-with-highlight-example.component.scss'
})
export class CarouselWithHighlightExampleComponent {

}
