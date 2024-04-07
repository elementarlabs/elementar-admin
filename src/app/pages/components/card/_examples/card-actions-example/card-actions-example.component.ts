import { Component } from '@angular/core';
import { MatCard, MatCardActions, MatCardHeader, MatCardSubtitle, MatCardTitle } from '@angular/material/card';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-card-actions-example',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardActions,
    MatButton,
    MatCardTitle,
    MatCardSubtitle
  ],
  templateUrl: './card-actions-example.component.html',
  styleUrl: './card-actions-example.component.scss'
})
export class CardActionsExampleComponent {

}
