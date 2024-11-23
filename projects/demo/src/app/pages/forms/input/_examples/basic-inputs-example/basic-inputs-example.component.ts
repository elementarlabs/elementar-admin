import { Component } from '@angular/core';
import { MatFormField, MatInput } from '@angular/material/input';
import { MatLabel } from '@angular/material/form-field';

@Component({
  selector: 'app-basic-inputs-example',
  imports: [
    MatInput,
    MatFormField,
    MatLabel
  ],
  templateUrl: './basic-inputs-example.component.html',
  styleUrl: './basic-inputs-example.component.scss'
})
export class BasicInputsExampleComponent {

}
