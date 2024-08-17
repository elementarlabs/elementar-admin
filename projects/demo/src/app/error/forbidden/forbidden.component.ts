import { Component } from '@angular/core';
import { MatAnchor, MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-forbidden',
  standalone: true,
  imports: [
    MatAnchor,
    MatButton,
    RouterLink
  ],
  templateUrl: './forbidden.component.html',
  styleUrl: './forbidden.component.scss'
})
export class ForbiddenComponent {

}
