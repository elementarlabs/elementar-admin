import { Component } from '@angular/core';
import { PlaygroundComponent } from '@meta/playground/playground.component';
import { BasicAlertExampleComponent } from '../_examples/basic-alert-example/basic-alert-example.component';
import { AlertVariantsExampleComponent } from '../_examples/alert-variants-example/alert-variants-example.component';
import {
  AlertWithBorderExampleComponent
} from '../_examples/alert-with-border-example/alert-with-border-example.component';
import { AlertWithIconExampleComponent } from '../_examples/alert-with-icon-example/alert-with-icon-example.component';
import {
  AlertWithTitleExampleComponent
} from '../_examples/alert-with-title-example/alert-with-title-example.component';
import { AlertActionsExampleComponent } from '../_examples/alert-actions-example/alert-actions-example.component';

@Component({
  standalone: true,
  imports: [
    PlaygroundComponent,
    BasicAlertExampleComponent,
    AlertVariantsExampleComponent,
    AlertWithBorderExampleComponent,
    AlertWithIconExampleComponent,
    AlertWithTitleExampleComponent,
    AlertActionsExampleComponent
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
