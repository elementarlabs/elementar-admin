import { Component } from '@angular/core';
import { PlaygroundComponent } from '@meta/playground/playground.component';
import {
  BasicButtonToggleExampleComponent
} from '../_examples/basic-button-toggle-example/basic-button-toggle-example.component';
import {
  ButtonToggleSelectionModeExampleComponent
} from '../_examples/button-toggle-selection-mode-example/button-toggle-selection-mode-example.component';
import {
  ButtonToggleAppearanceExampleComponent
} from '../_examples/button-toggle-appearance-example/button-toggle-appearance-example.component';
import { PageComponent } from '@meta/page/page.component';
import { PageContentDirective } from '@meta/page/page-content.directive';

@Component({
  standalone: true,
  imports: [
    PlaygroundComponent,
    BasicButtonToggleExampleComponent,
    ButtonToggleSelectionModeExampleComponent,
    ButtonToggleAppearanceExampleComponent,
    PageComponent,
    PageContentDirective,
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
