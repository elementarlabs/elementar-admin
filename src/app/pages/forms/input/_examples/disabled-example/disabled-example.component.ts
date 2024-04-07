import { Component } from '@angular/core';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-disabled-example',
  standalone: true,
  imports: [
    MatFormField,
    MatInput,
    MatLabel
  ],
  templateUrl: './disabled-example.component.html',
  styleUrl: './disabled-example.component.scss'
})
export class DisabledExampleComponent {

}
