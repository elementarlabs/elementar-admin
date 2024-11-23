import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import {
  SuggestionBlockComponent,
  SuggestionComponent,
  SuggestionIconDirective, SuggestionsComponent, SuggestionThumbDirective
} from '@elementar/components/suggestions';
import { AvatarComponent } from '@elementar/components/avatar';

@Component({
    selector: 'app-basic-suggestions-example',
    imports: [
        MatButton,
        MatIcon,
        SuggestionBlockComponent,
        SuggestionComponent,
        SuggestionIconDirective,
        SuggestionThumbDirective,
        SuggestionsComponent,
        AvatarComponent
    ],
    templateUrl: './basic-suggestions-example.component.html',
    styleUrl: './basic-suggestions-example.component.scss'
})
export class BasicSuggestionsExampleComponent {
}
