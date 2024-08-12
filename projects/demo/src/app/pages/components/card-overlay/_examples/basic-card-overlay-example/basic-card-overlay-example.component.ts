import { Component } from '@angular/core';
import {
  MatCard,
  MatCardActions,
  MatCardAvatar,
  MatCardContent,
  MatCardHeader,
  MatCardImage, MatCardSubtitle, MatCardTitle
} from '@angular/material/card';
import { CardOverlayComponent, CardOverlayContainerDirective } from '@elementar/components/card-overlay';
import { MatButton } from '@angular/material/button';
import { AvatarComponent } from '@elementar/components/avatar';

@Component({
  selector: 'app-basic-card-overlay-example',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    CardOverlayComponent,
    MatButton,
    CardOverlayContainerDirective,
    AvatarComponent,
    MatCardActions,
    MatCardAvatar,
    MatCardHeader,
    MatCardImage,
    MatCardSubtitle,
    MatCardTitle
  ],
  templateUrl: './basic-card-overlay-example.component.html',
  styleUrl: './basic-card-overlay-example.component.scss'
})
export class BasicCardOverlayExampleComponent {

}
