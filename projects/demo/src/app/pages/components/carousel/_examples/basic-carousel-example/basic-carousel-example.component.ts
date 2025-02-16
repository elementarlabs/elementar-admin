import { Component } from '@angular/core';
import { CarouselComponent } from '@elementar-ui/components';
import { CarouselCardComponent } from '@elementar-ui/components';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { CarouselPreviousDirective } from '@elementar-ui/components';
import { CarouselNextDirective } from '@elementar-ui/components';

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
