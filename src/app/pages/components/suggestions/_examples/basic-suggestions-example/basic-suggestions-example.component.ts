import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import {
  SuggestionBlockComponent,
  SuggestionComponent,
  SuggestionIconDirective, SuggestionsComponent, SuggestionThumbDirective
} from '@elementar-ui/components';
import { AvatarComponent } from '@elementar-ui/components';

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
