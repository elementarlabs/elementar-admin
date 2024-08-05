import { Component } from '@angular/core';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatOption, MatSelect } from '@angular/material/select';

@Component({
  selector: 'app-get-set-value-example',
  standalone: true,
  imports: [
    MatFormField,
    MatSelect,
    MatOption,
    MatLabel
  ],
  templateUrl: './get-set-value-example.component.html',
  styleUrl: './get-set-value-example.component.scss'
})
export class GetSetValueExampleComponent {
  selected = 'option2';
}
