import { Component } from '@angular/core';
import { PlaygroundComponent } from '@meta/playground/playground.component';
import { MatAnchor, MatButton, MatFabButton, MatIconButton, MatMiniFabButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { EmrScrollSpyModule } from '@elementar/components';
import {
  SimpleAutocompleteExampleComponent
} from '../../autocomplete/_examples/simple-autocomplete-example/simple-autocomplete-example.component';
import { BasicButtonsExampleComponent } from '../_examples/basic-buttons-example/basic-buttons-example.component';
import { RaisedButtonsExampleComponent } from '../_examples/raised-buttons-example/raised-buttons-example.component';
import { StrokedButtonsExampleComponent } from '../_examples/stroked-buttons-example/stroked-buttons-example.component';
import { FlatButtonsExampleComponent } from '../_examples/flat-buttons-example/flat-buttons-example.component';
import { IconButtonsExampleComponent } from '../_examples/icon-buttons-example/icon-buttons-example.component';
import { FabButtonsExampleComponent } from '../_examples/fab-buttons-example/fab-buttons-example.component';
import {
  MiniFabButtonsExampleComponent
} from '../_examples/mini-fab-buttons-example/mini-fab-buttons-example.component';
import { ButtonLoadingExampleComponent } from '../_examples/button-loading-example/button-loading-example.component';
import { EmrBreadcrumbsModule } from '@elementar/components';
import { RouterLink } from '@angular/router';
import { PageComponent } from '@meta/page/page.component';
import { PageContentDirective } from '@meta/page/page-content.directive';
import { PageAsideDirective } from '@meta/page/page-aside.directive';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [
    PlaygroundComponent,
    MatButton,
    MatAnchor,
    MatIconButton,
    MatIcon,
    MatFabButton,
    MatMiniFabButton,
    EmrScrollSpyModule,
    SimpleAutocompleteExampleComponent,
    BasicButtonsExampleComponent,
    RaisedButtonsExampleComponent,
    StrokedButtonsExampleComponent,
    FlatButtonsExampleComponent,
    IconButtonsExampleComponent,
    FabButtonsExampleComponent,
    MiniFabButtonsExampleComponent,
    ButtonLoadingExampleComponent,
    EmrBreadcrumbsModule,
    RouterLink,
    PageComponent,
    PageContentDirective,
    PageAsideDirective
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
