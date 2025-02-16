import { Component } from '@angular/core';
import {
  MatCard,
  MatCardActions,
  MatCardAvatar,
  MatCardContent,
  MatCardHeader,
  MatCardImage, MatCardSubtitle, MatCardTitle
} from '@angular/material/card';
import { CardOverlayComponent, CardOverlayContainerDirective } from '@elementar-ui/components';
import { MatButton } from '@angular/material/button';
import { AvatarComponent } from '@elementar-ui/components';

@Component({
  selector: 'app-basic-card-overlay-example',
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
    MatCardTitle,
    CardOverlayContainerDirective
  ],
  templateUrl: './basic-card-overlay-example.component.html',
  styleUrl: './basic-card-overlay-example.component.scss'
})
export class BasicCardOverlayExampleComponent {

}
