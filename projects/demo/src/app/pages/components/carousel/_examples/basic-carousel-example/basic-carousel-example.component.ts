import { Component } from '@angular/core';
import { CarouselComponent } from '@elementar/components/carousel';
import { CarouselCardComponent } from '@elementar/components/carousel';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { CarouselPreviousDirective } from '@elementar/components/carousel';
import { CarouselNextDirective } from '@elementar/components/carousel';

@Component({
  selector: 'app-basic-carousel-example',
  imports: [
    CarouselComponent,
    CarouselCardComponent,
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
