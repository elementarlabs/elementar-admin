import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { ButtonDirective } from '@elementar/components/core';

@Component({
  selector: 'app-button-loading-example',
  imports: [
    MatButton,
    ButtonDirective
  ],
  templateUrl: './button-loading-example.component.html',
  styleUrl: './button-loading-example.component.scss'
})
export class ButtonLoadingExampleComponent {

}
