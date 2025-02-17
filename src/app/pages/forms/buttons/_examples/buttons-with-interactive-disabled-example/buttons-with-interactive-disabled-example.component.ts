import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'app-buttons-with-interactive-disabled-example',
  imports: [
    MatButton,
    MatTooltip
  ],
  templateUrl: './buttons-with-interactive-disabled-example.component.html',
  styleUrl: './buttons-with-interactive-disabled-example.component.scss'
})
export class ButtonsWithInteractiveDisabledExampleComponent {

}
