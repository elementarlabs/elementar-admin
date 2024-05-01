import { Component } from '@angular/core';
import { PlaygroundComponent } from '@meta/playground/playground.component';
import {
  BasicProgressSpinnerExampleComponent
} from '../_examples/basic-progress-spinner-example/basic-progress-spinner-example.component';
import {
  ConfigurableSpinnerExampleComponent
} from '../_examples/configurable-spinner-example/configurable-spinner-example.component';
import { PageComponent } from '@meta/page/page.component';
import { PageContentDirective } from '@meta/page/page-content.directive';

@Component({
  standalone: true,
  imports: [
    PlaygroundComponent,
    BasicProgressSpinnerExampleComponent,
    ConfigurableSpinnerExampleComponent,
    PageComponent,
    PageContentDirective
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
