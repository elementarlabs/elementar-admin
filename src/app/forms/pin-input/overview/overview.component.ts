import { Component } from '@angular/core';
import { PlaygroundComponent } from '@meta/playground/playground.component';
import { BasicPinInputExampleComponent } from '../_examples/basic-pin-input-example/basic-pin-input-example.component';
import {
  PinInputWithPlaceholderExampleComponent
} from '../_examples/pin-input-with-placeholder-example/pin-input-with-placeholder-example.component';
import {
  PinInputLengthExampleComponent
} from '../_examples/pin-input-length-example/pin-input-length-example.component';
import {
  PinInputAcceptCustomSymbolsExampleComponent
} from '../_examples/pin-input-accept-custom-symbols-example/pin-input-accept-custom-symbols-example.component';
import { PageComponent } from '@meta/page/page.component';
import { PageContentDirective } from '@meta/page/page-content.directive';

@Component({
    imports: [
        PlaygroundComponent,
        BasicPinInputExampleComponent,
        PinInputWithPlaceholderExampleComponent,
        PinInputLengthExampleComponent,
        PinInputAcceptCustomSymbolsExampleComponent,
        PageComponent,
        PageContentDirective
    ],
    templateUrl: './overview.component.html',
    styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
