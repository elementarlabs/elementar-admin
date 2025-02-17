import { Component } from '@angular/core';
import { MatAnchor, MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-internal-server-error',
  imports: [
    MatAnchor,
    RouterLink,
    MatButton
  ],
  templateUrl: './internal-server-error.component.html',
  styleUrl: './internal-server-error.component.scss'
})
export class InternalServerErrorComponent {

}
