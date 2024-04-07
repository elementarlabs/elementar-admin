import { Component } from '@angular/core';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardFooter,
  MatCardHeader, MatCardSubtitle,
  MatCardTitle
} from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';
import { MatButton } from '@angular/material/button';
import { MatProgressBar } from '@angular/material/progress-bar';

@Component({
  selector: 'app-card-footer-loading-example',
  standalone: true,
  imports: [
    MatCardHeader,
    MatCard,
    MatCardContent,
    MatDivider,
    MatCardActions,
    MatButton,
    MatCardFooter,
    MatProgressBar,
    MatCardTitle,
    MatCardSubtitle
  ],
  templateUrl: './card-footer-loading-example.component.html',
  styleUrl: './card-footer-loading-example.component.scss'
})
export class CardFooterLoadingExampleComponent {
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
}
