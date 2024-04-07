import { Component } from '@angular/core';
import { MatButton, MatIconButton } from '@angular/material/button';
import { ButtonDirective } from '@components/button.directive';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-button-loading-example',
  standalone: true,
  imports: [
    MatButton,
    ButtonDirective,
    MatIconButton,
    MatIcon
  ],
  templateUrl: './button-loading-example.component.html',
  styleUrl: './button-loading-example.component.scss'
})
export class ButtonLoadingExampleComponent {

}
