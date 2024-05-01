import { Component } from '@angular/core';
import { PlaygroundComponent } from '@meta/playground/playground.component';
import { BasicSnackbarExampleComponent } from '../_examples/basic-snackbar-example/basic-snackbar-example.component';
import {
  SnackbarWithCustomComponentExampleComponent
} from '../_examples/snackbar-with-custom-component-example/snackbar-with-custom-component-example.component';
import {
  ConfigurableSnackbarExampleComponent
} from '../_examples/configurable-snackbar-example/configurable-snackbar-example.component';
import { PageComponent } from '@meta/page/page.component';
import { PageContentDirective } from '@meta/page/page-content.directive';

@Component({
  standalone: true,
  imports: [
    PlaygroundComponent,
    BasicSnackbarExampleComponent,
    SnackbarWithCustomComponentExampleComponent,
    ConfigurableSnackbarExampleComponent,
    PageComponent,
    PageContentDirective
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
