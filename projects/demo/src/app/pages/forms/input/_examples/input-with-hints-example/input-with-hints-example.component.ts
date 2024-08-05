import { Component } from '@angular/core';
import { MatFormField, MatHint, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-input-with-hints-example',
  standalone: true,
  imports: [
    MatFormField,
    MatInput,
    MatHint,
    MatLabel
  ],
  templateUrl: './input-with-hints-example.component.html',
  styleUrl: './input-with-hints-example.component.scss'
})
export class InputWithHintsExampleComponent {

}
