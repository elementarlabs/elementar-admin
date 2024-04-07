import { Component } from '@angular/core';
import { MatButtonToggle, MatButtonToggleGroup } from '@angular/material/button-toggle';

@Component({
  selector: 'app-basic-button-toggle-example',
  standalone: true,
  imports: [
    MatButtonToggleGroup,
    MatButtonToggle
  ],
  templateUrl: './basic-button-toggle-example.component.html',
  styleUrl: './basic-button-toggle-example.component.scss'
})
export class BasicButtonToggleExampleComponent {

}
