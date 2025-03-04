import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatAnchor, MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { LogoComponent } from '@elementar-ui/components/logo';

@Component({
  selector: 'app-done',
  imports: [
    FormsModule,
    MatButton,
    MatIcon,
    RouterLink,
    MatAnchor,
    LogoComponent
  ],
  templateUrl: './done.component.html',
  styleUrl: './done.component.scss'
})
export class DoneComponent {

}
