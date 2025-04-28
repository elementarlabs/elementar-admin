import { Component } from '@angular/core';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { AsyncPipe } from '@angular/common';
import { MatAutocomplete, MatAutocompleteTrigger, MatOption } from '@angular/material/autocomplete';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatInput } from '@angular/material/input';
import { map, Observable, startWith } from 'rxjs';

export interface User {
  name: string;
}

@Component({
    selector: 'app-separate-controls-and-display-values-example',
    imports: [
        MatFormField,
        AsyncPipe,
        MatAutocomplete,
        MatAutocompleteTrigger,
        ReactiveFormsModule,
        MatOption,
        MatInput,
        MatLabel
    ],
    templateUrl: './separate-controls-and-display-values-example.component.html',
    styleUrl: './separate-controls-and-display-values-example.component.scss'
})
export class SeparateControlsAndDisplayValuesExampleComponent {
  myControl = new FormControl<string | User>('');
  options: User[] = [{name: 'Mary'}, {name: 'Shelley'}, {name: 'Igor'}];
  filteredOptions: Observable<User[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.name;
        return name ? this._filter(name as string) : this.options.slice();
      }),
    );
  }

  displayFn(user: User): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }
}
