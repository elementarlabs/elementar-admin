import { Component } from '@angular/core';
import { PlaygroundComponent } from '@meta/playground/playground.component';
import { BasicSnackbarExampleComponent } from '../_examples/basic-snackbar-example/basic-snackbar-example.component';
import {
  SnackbarWithCustomComponentExampleComponent
} from '../_examples/snackbar-with-custom-component-example/snackbar-with-custom-component-example.component';
import {
  ConfigurableSnackbarExampleComponent
} from '../_examples/configurable-snackbar-example/configurable-snackbar-example.component';

@Component({
  standalone: true,
  imports: [
    PlaygroundComponent,
    BasicSnackbarExampleComponent,
    SnackbarWithCustomComponentExampleComponent,
    ConfigurableSnackbarExampleComponent
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
