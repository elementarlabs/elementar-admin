import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatAutocomplete, MatAutocompleteTrigger, MatOption } from '@angular/material/autocomplete';
import { PlaygroundComponent } from '@demo/meta/playground/playground.component';
import { map, Observable, startWith } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import {
  AutocompleteFilterExampleComponent
} from '../_examples/autocomplete-filter-example/autocomplete-filter-example.component';
import {
  SimpleAutocompleteExampleComponent
} from '../_examples/simple-autocomplete-example/simple-autocomplete-example.component';
import {
  SeparateControlsAndDisplayValuesExampleComponent
} from '../_examples/separate-controls-and-display-values-example/separate-controls-and-display-values-example.component';
import {
  AutoHighlightFirstPersonExampleComponent
} from '../_examples/auto-highlight-first-person-example/auto-highlight-first-person-example.component';
import { OptionGroupsExampleComponent } from '../_examples/option-groups-example/option-groups-example.component';
import { PageComponent } from '@demo/meta/page/page.component';
import { PageContentDirective } from '@demo/meta/page/page-content.directive';

@Component({
  standalone: true,
  imports: [
    MatFormField,
    MatInput,
    MatAutocompleteTrigger,
    MatAutocomplete,
    MatOption,
    ReactiveFormsModule,
    PlaygroundComponent,
    MatLabel,
    AsyncPipe,
    AutocompleteFilterExampleComponent,
    SimpleAutocompleteExampleComponent,
    SeparateControlsAndDisplayValuesExampleComponent,
    AutoHighlightFirstPersonExampleComponent,
    OptionGroupsExampleComponent,
    PageComponent,
    PageContentDirective
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {
  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];

  customFilterControl = new FormControl('');
  filteredOptions: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}
