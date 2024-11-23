import { Component } from '@angular/core';
import { MatAutocomplete, MatAutocompleteTrigger, MatOption } from '@angular/material/autocomplete';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-simple-autocomplete-example',
    imports: [
        MatAutocomplete,
        MatAutocompleteTrigger,
        MatFormField,
        MatInput,
        MatLabel,
        MatOption,
        ReactiveFormsModule
    ],
    templateUrl: './simple-autocomplete-example.component.html',
    styleUrl: './simple-autocomplete-example.component.scss'
})
export class SimpleAutocompleteExampleComponent {
  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
}
