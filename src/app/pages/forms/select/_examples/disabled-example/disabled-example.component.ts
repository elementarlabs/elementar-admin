import { Component } from '@angular/core';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatOption, MatSelect } from '@angular/material/select';
import { MatInput } from '@angular/material/input';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-disabled-example',
  standalone: true,
  imports: [
    MatCheckbox,
    MatFormField,
    MatSelect,
    MatOption,
    MatInput,
    MatLabel,
    ReactiveFormsModule
  ],
  templateUrl: './disabled-example.component.html',
  styleUrl: './disabled-example.component.scss',
  host: {
    ngSkipHydration: 'true'
  }
})
export class DisabledExampleComponent {
  disableSelect = new FormControl(false);
}
