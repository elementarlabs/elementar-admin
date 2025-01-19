import { Component } from '@angular/core';
import { AvatarComponent } from '@elementar/components/avatar';
import { CardOverlayComponent, CardOverlayContainerDirective } from '@elementar/components/card-overlay';
import { MatButton } from '@angular/material/button';
import {
  MatCard,
  MatCardActions,
  MatCardAvatar,
  MatCardContent,
  MatCardHeader,
  MatCardImage, MatCardSubtitle, MatCardTitle
} from '@angular/material/card';

@Component({
  selector: 'app-card-overlay-with-blur-example',
  imports: [
    AvatarComponent,
    CardOverlayComponent,
    CardOverlayContainerDirective,
    MatButton,
    MatCard,
    MatCardActions,
    MatCardAvatar,
    MatCardContent,
    MatCardHeader,
    MatCardImage,
    MatCardSubtitle,
    MatCardTitle
  ],
  templateUrl: './card-overlay-with-blur-example.component.html',
  styleUrl: './card-overlay-with-blur-example.component.scss'
})
export class CardOverlayWithBlurExampleComponent {

}
