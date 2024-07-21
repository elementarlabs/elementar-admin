import { Component } from '@angular/core';
import { EmrAvatarModule } from '@elementar/components/avatar';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import {
  SuggestionBlockComponent,
  SuggestionComponent,
  SuggestionIconDirective, SuggestionsComponent, SuggestionThumbDirective
} from '@elementar/components/suggestions';

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
