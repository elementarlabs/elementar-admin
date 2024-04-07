import { Component } from '@angular/core';
import { EmrAvatarModule } from '@components/avatar';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { SuggestionBlockComponent } from '@components/suggestions/suggestion-block/suggestion-block.component';
import { SuggestionComponent } from '@components/suggestions/suggestion/suggestion.component';
import { SuggestionIconDirective } from '@components/suggestions/suggestion-icon.directive';
import { SuggestionThumbDirective } from '@components/suggestions/suggestion-thumb.directive';
import { SuggestionsComponent } from '@components/suggestions/suggestions/suggestions.component';

@Component({
  selector: 'app-basic-suggestions-example',
  standalone: true,
  imports: [
    EmrAvatarModule,
    MatButton,
    MatIcon,
    SuggestionBlockComponent,
    SuggestionComponent,
    SuggestionIconDirective,
    SuggestionThumbDirective,
    SuggestionsComponent
  ],
  templateUrl: './basic-suggestions-example.component.html',
  styleUrl: './basic-suggestions-example.component.scss'
})
export class BasicSuggestionsExampleComponent {

}
