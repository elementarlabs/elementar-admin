import { Component } from '@angular/core';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';

@Component({
  selector: 'app-menu-with-icons-example',
  standalone: true,
  imports: [
    MatMenu,
    MatMenuTrigger,
    MatIcon,
    MatIconButton,
    MatMenuItem
  ],
  templateUrl: './menu-with-icons-example.component.html',
  styleUrl: './menu-with-icons-example.component.scss'
})
export class MenuWithIconsExampleComponent {

}
