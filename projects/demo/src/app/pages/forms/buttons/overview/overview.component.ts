import { Component } from '@angular/core';
import { PlaygroundComponent } from '@demo/meta/playground/playground.component';
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
import { EmrBreadcrumbsModule } from '@elementar/components/breadcrumbs';
import { RouterLink } from '@angular/router';
import { PageComponent } from '@demo/meta/page/page.component';
import { PageContentDirective } from '@demo/meta/page/page-content.directive';
import { PageAsideDirective } from '@demo/meta/page/page-aside.directive';
import { EmrScrollSpyModule } from '@elementar/components/scroll-spy';
import {
  ButtonsWithInteractiveDisabledExampleComponent
} from '../_examples/buttons-with-interactive-disabled-example/buttons-with-interactive-disabled-example.component';
import {
  ButtonsExtendedFabExampleComponent
} from '../_examples/buttons-extended-fab-example/buttons-extended-fab-example.component';

@Component({
  selector: 'app-overview',
  imports: [
    PlaygroundComponent,
    EmrScrollSpyModule,
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
    PageAsideDirective,
    ButtonsWithInteractiveDisabledExampleComponent,
    ButtonsExtendedFabExampleComponent
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
