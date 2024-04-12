import { Component } from '@angular/core';

@Component({
  selector: 'emr-suggestions',
  exportAs: 'emrSuggestions',
  standalone: true,
  imports: [],
  templateUrl: './suggestions.component.html',
  styleUrl: './suggestions.component.scss',
  host: {
    'class': 'emr-suggestions'
  }
})
export class SuggestionsComponent {

}
