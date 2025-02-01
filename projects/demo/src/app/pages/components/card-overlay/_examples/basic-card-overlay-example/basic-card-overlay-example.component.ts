import { Component } from '@angular/core';
import {
  MatCard,
  MatCardActions,
  MatCardAvatar,
  MatCardContent,
  MatCardHeader,
  MatCardImage, MatCardSubtitle, MatCardTitle
} from '@angular/material/card';
import { CardOverlayComponent, CardOverlayContainerDirective } from '@elementar-ui/components/card-overlay';
import { MatButton } from '@angular/material/button';
import { AvatarComponent } from '@elementar-ui/components/avatar';

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
    MatCardTitle
  ],
  templateUrl: './basic-card-overlay-example.component.html',
  styleUrl: './basic-card-overlay-example.component.scss'
})
export class BasicCardOverlayExampleComponent {

}
