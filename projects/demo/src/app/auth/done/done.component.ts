import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatAnchor, MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-done',
  imports: [
    FormsModule,
    MatButton,
    MatIcon,
    RouterLink,
    MatAnchor
  ],
  templateUrl: './done.component.html',
  styleUrl: './done.component.scss'
})
export class DoneComponent {

}
