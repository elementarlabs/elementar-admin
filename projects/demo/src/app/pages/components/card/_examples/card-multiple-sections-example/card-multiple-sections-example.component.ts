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
import { AvatarComponent } from '@elementar-ui/components/avatar';

@Component({
    selector: 'app-card-multiple-sections-example',
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
        AvatarComponent
    ],
    templateUrl: './card-multiple-sections-example.component.html',
    styleUrl: './card-multiple-sections-example.component.scss'
})
export class CardMultipleSectionsExampleComponent {

}
