import { Component, model } from '@angular/core';
import { PlaygroundComponent } from '@demo/meta/playground/playground.component';
import {
  BasicNumberInputExampleComponent
} from '../_examples/basic-number-input-example/basic-number-input-example.component';
import {
  NumberInputCustomControlsExampleComponent
} from '../_examples/number-input-custom-controls-example/number-input-custom-controls-example.component';
import {
  NumberInputMinMaxExampleComponent
} from '../_examples/number-input-min-max-example/number-input-min-max-example.component';
import { PageComponent } from '@demo/meta/page/page.component';
import { PageContentDirective } from '@demo/meta/page/page-content.directive';
import { MatTab, MatTabGroup } from '@angular/material/tabs';

@Component({
  selector: 'app-overview',
  imports: [
    PlaygroundComponent,
    BasicNumberInputExampleComponent,
    NumberInputCustomControlsExampleComponent,
    NumberInputMinMaxExampleComponent,
    PageComponent,
    PageContentDirective,
    MatTab,
    MatTabGroup
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {
}
