import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatAnchor } from '@angular/material/button';
import { MatSlideToggle } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [
    RouterLink,
    MatAnchor,
    MatSlideToggle
  ],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent {

}
