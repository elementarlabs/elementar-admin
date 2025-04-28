import { Component } from '@angular/core';
import { MatFormField, MatLabel, MatOption, MatSelect, MatSelectTrigger } from '@angular/material/select';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-custom-trigger-example',
  imports: [
    MatSelect,
    MatLabel,
    MatFormField,
    ReactiveFormsModule,
    MatOption,
    MatSelectTrigger
  ],
  templateUrl: './custom-trigger-example.component.html',
  styleUrl: './custom-trigger-example.component.scss'
})
export class CustomTriggerExampleComponent {
  toppings = new FormControl('');
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
}
