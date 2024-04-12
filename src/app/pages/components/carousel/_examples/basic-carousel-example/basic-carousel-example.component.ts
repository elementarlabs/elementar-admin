import { Component } from '@angular/core';
import { CarouselComponent } from '@elementar/components';
import { CarouselCardComponent } from '@elementar/components';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { CarouselPreviousDirective } from '@elementar/components';
import { CarouselNextDirective } from '@elementar/components';

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
