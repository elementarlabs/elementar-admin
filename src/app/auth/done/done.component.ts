import { Component } from '@angular/core';
import { EmrPinInputModule } from '@elementar/components';
import { FormsModule } from '@angular/forms';
import { MatAnchor, MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-done',
  standalone: true,
  imports: [
    EmrPinInputModule,
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
