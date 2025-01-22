import { Component } from '@angular/core';
import { PlaygroundComponent } from '@demo/meta/playground/playground.component';
import { BasicChipsExampleComponent } from '../_examples/basic-chips-example/basic-chips-example.component';
import {
  ChipsWithInputExampleComponent
} from '../_examples/chips-with-input-example/chips-with-input-example.component';
import {
  ChipsAutocompleteExampleComponent
} from '../_examples/chips-autocomplete-example/chips-autocomplete-example.component';
import {
  ChipsWithIconsExampleComponent
} from '../_examples/chips-with-icons-example/chips-with-icons-example.component';
import {
  ChipsDragAndDropExampleComponent
} from '../_examples/chips-drag-and-drop-example/chips-drag-and-drop-example.component';
import { PageComponent } from '@demo/meta/page/page.component';
import { PageContentDirective } from '@demo/meta/page/page-content.directive';
import { StackedChipsExampleComponent } from '../_examples/stacked-chips-example/stacked-chips-example.component';

@Component({
  imports: [
    PlaygroundComponent,
    BasicChipsExampleComponent,
    ChipsWithInputExampleComponent,
    ChipsAutocompleteExampleComponent,
    ChipsWithIconsExampleComponent,
    ChipsDragAndDropExampleComponent,
    PageComponent,
    PageContentDirective,
    StackedChipsExampleComponent
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
