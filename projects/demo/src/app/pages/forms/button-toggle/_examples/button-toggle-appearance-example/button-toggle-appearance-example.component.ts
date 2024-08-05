import { Component } from '@angular/core';
import { MatButtonToggle, MatButtonToggleGroup } from '@angular/material/button-toggle';

@Component({
  selector: 'app-button-toggle-appearance-example',
  standalone: true,
  imports: [
    MatButtonToggleGroup,
    MatButtonToggle
  ],
  templateUrl: './button-toggle-appearance-example.component.html',
  styleUrl: './button-toggle-appearance-example.component.scss'
})
export class ButtonToggleAppearanceExampleComponent {

}
