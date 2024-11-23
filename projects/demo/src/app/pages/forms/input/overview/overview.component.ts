import { Component } from '@angular/core';
import { PlaygroundComponent } from '@demo/meta/playground/playground.component';
import { BasicInputsExampleComponent } from '../_examples/basic-inputs-example/basic-inputs-example.component';
import {
  TextareaAutosizeExampleComponent
} from '../_examples/textarea-autosize-example/textarea-autosize-example.component';
import { ClearButtonExampleComponent } from '../_examples/clear-button-example/clear-button-example.component';
import { DisabledExampleComponent } from '../_examples/disabled-example/disabled-example.component';
import { ErrorMessagesExampleComponent } from '../_examples/error-messages-example/error-messages-example.component';
import {
  InputWithHintsExampleComponent
} from '../_examples/input-with-hints-example/input-with-hints-example.component';
import {
  PrefixesAndSuffixesExampleComponent
} from '../_examples/prefixes-and-suffixes-example/prefixes-and-suffixes-example.component';
import { PageComponent } from '@demo/meta/page/page.component';
import { PageContentDirective } from '@demo/meta/page/page-content.directive';

@Component({
    imports: [
        PlaygroundComponent,
        BasicInputsExampleComponent,
        TextareaAutosizeExampleComponent,
        ClearButtonExampleComponent,
        DisabledExampleComponent,
        ErrorMessagesExampleComponent,
        InputWithHintsExampleComponent,
        PrefixesAndSuffixesExampleComponent,
        PageComponent,
        PageContentDirective
    ],
    templateUrl: './overview.component.html',
    styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
