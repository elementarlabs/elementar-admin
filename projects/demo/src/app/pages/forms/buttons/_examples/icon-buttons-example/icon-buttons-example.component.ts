import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';

@Component({
  selector: 'app-icon-buttons-example',
  standalone: true,
  imports: [
    MatIcon,
    MatIconButton
  ],
  templateUrl: './icon-buttons-example.component.html',
  styleUrl: './icon-buttons-example.component.scss'
})
export class IconButtonsExampleComponent {

}
