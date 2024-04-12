import { Component } from '@angular/core';
import { EmrAvatarModule } from '@elementar/components';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { SuggestionBlockComponent } from '@elementar/components';
import { SuggestionComponent } from '@elementar/components';
import { SuggestionIconDirective } from '@elementar/components';
import { SuggestionThumbDirective } from '@elementar/components';
import { SuggestionsComponent } from '@elementar/components';

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
