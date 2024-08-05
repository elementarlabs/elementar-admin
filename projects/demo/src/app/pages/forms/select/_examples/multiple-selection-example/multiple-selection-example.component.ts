import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatOption, MatSelect } from '@angular/material/select';
import { MatLabel } from '@angular/material/form-field';

@Component({
  selector: 'app-multiple-selection-example',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatSelect,
    MatOption,
    MatFormField,
    MatLabel
  ],
  templateUrl: './multiple-selection-example.component.html',
  styleUrl: './multiple-selection-example.component.scss'
})
export class MultipleSelectionExampleComponent {
  toppings = new FormControl('');
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
}
