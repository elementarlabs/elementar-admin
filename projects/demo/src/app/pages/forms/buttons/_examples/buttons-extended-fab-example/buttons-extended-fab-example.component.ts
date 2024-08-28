import { Component } from '@angular/core';
import { MatFabButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-buttons-extended-fab-example',
  standalone: true,
  imports: [
    MatFabButton,
    MatIcon
  ],
  templateUrl: './buttons-extended-fab-example.component.html',
  styleUrl: './buttons-extended-fab-example.component.scss'
})
export class ButtonsExtendedFabExampleComponent {

}
