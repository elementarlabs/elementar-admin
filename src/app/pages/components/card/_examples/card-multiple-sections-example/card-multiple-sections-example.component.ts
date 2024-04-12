import { Component } from '@angular/core';
import {
  MatCard,
  MatCardActions, MatCardAvatar,
  MatCardContent,
  MatCardHeader,
  MatCardImage, MatCardSubtitle,
  MatCardTitle
} from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import { EmrAvatarModule } from '@elementar/components';

@Component({
  selector: 'app-card-multiple-sections-example',
  standalone: true,
  imports: [
    MatCardHeader,
    MatCardImage,
    MatCardContent,
    MatCardActions,
    MatButton,
    MatCard,
    MatCardTitle,
    MatCardAvatar,
    MatCardSubtitle,
    EmrAvatarModule
  ],
  templateUrl: './card-multiple-sections-example.component.html',
  styleUrl: './card-multiple-sections-example.component.scss'
})
export class CardMultipleSectionsExampleComponent {

}
