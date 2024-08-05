import { Component } from '@angular/core';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-nested-menu-example',
  standalone: true,
  imports: [
    MatMenuTrigger,
    MatMenu,
    MatMenuItem,
    MatButton
  ],
  templateUrl: './nested-menu-example.component.html',
  styleUrl: './nested-menu-example.component.scss'
})
export class NestedMenuExampleComponent {

}
