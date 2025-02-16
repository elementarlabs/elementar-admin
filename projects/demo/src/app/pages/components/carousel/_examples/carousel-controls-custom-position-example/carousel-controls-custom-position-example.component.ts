import { Component } from '@angular/core';
import { CarouselCardComponent } from '@elementar-ui/components';
import { CarouselComponent } from '@elementar-ui/components';
import { CarouselNextDirective } from '@elementar-ui/components';
import { CarouselPreviousDirective } from '@elementar-ui/components';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';

@Component({
  selector: 'app-carousel-controls-custom-position-example',
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
