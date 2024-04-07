import { Component } from '@angular/core';
import { MatBadge } from '@angular/material/badge';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-basic-badges-example',
  standalone: true,
  imports: [
    MatBadge,
    MatButton,
    MatIcon
  ],
  templateUrl: './basic-badges-example.component.html',
  styleUrl: './basic-badges-example.component.scss'
})
export class BasicBadgesExampleComponent {
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
}
