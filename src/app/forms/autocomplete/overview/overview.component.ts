import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { PlaygroundComponent } from '@meta/playground/playground.component';
import { map, Observable, startWith } from 'rxjs';
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
import { PageComponent } from '@meta/page/page.component';
import { PageContentDirective } from '@meta/page/page-content.directive';

@Component({
  imports: [
    ReactiveFormsModule,
    PlaygroundComponent,
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
