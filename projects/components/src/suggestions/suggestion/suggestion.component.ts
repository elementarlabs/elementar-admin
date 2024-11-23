import { Component } from '@angular/core';
import { MatRipple } from '@angular/material/core';

@Component({
    selector: 'emr-suggestion,[emr-suggestion]',
    exportAs: 'emrSuggestion',
    imports: [],
    templateUrl: './suggestion.component.html',
    styleUrl: './suggestion.component.scss',
    hostDirectives: [
        MatRipple
    ]
})
export class SuggestionComponent {

}
