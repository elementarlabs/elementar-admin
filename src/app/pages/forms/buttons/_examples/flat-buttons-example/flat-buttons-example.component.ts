import { Component } from '@angular/core';
import { MatAnchor, MatButton } from '@angular/material/button';
import { ButtonDirective } from '@components/button.directive';

@Component({
  selector: 'app-flat-buttons-example',
  standalone: true,
  imports: [
    MatAnchor,
    MatButton,
    ButtonDirective
  ],
  templateUrl: './flat-buttons-example.component.html',
  styleUrl: './flat-buttons-example.component.scss'
})
export class FlatButtonsExampleComponent {

}
