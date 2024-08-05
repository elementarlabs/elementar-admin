import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatMiniFabButton } from '@angular/material/button';

@Component({
  selector: 'app-mini-fab-buttons-example',
  standalone: true,
  imports: [
    MatIcon,
    MatMiniFabButton
  ],
  templateUrl: './mini-fab-buttons-example.component.html',
  styleUrl: './mini-fab-buttons-example.component.scss'
})
export class MiniFabButtonsExampleComponent {

}
